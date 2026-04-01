import { createClient } from 'contentful';

const client = createClient({
  space: 'gwu9kb1zs83n',
  accessToken: 'eDWINknXObqork1rw8LbleJUC1RvgEeh0b71ay46VLA',
});

/**
 * Extract plain text from a Contentful rich text document (recursive)
 */
function richTextToPlainText(richText) {
  if (!richText) return null;
  if (typeof richText === 'string') return richText;
  // Contentful rich text document
  if (richText.nodeType === 'document' && Array.isArray(richText.content)) {
    return richText.content
      .map((node) => extractNodeText(node))
      .join(' ')
      .trim();
  }
  return String(richText);
}

function extractNodeText(node) {
  if (!node) return '';
  if (node.nodeType === 'text') return node.value || '';
  if (Array.isArray(node.content)) {
    return node.content.map(extractNodeText).join('');
  }
  return '';
}

/**
 * Fetch all products from Contentful
 *
 * Actual field shapes from API:
 *   name     : string
 *   deskripsi: Rich Text document object
 *   harga    : number
 *   kategori : string
 *   image    : string (direct URL, e.g. "https://ibb.co.com/...")
 *   featured : string "Yes" | "No"  (or boolean in some entries)
 */
export async function getProducts() {
  const response = await client.getEntries({
    content_type: 'postyParfume',
    select: [
      'sys.id',
      'fields.name',
      'fields.deskripsi',
      'fields.harga',
      'fields.kategori',
      'fields.image',
      'fields.featured',
    ],
  });

  return response.items.map((item) => {
    const f = item.fields;

    // Image: could be a direct string URL or an Asset reference
    let imageUrl = null;
    if (typeof f.image === 'string') {
      // Direct URL (may or may not have protocol)
      imageUrl = f.image.startsWith('http') ? f.image : `https:${f.image}`;
    } else if (f.image?.fields?.file?.url) {
      // Resolved Contentful asset
      const rawUrl = f.image.fields.file.url;
      imageUrl = rawUrl.startsWith('http') ? rawUrl : `https:${rawUrl}`;
    }

    // deskripsi: may be Rich Text doc or plain string
    const deskripsi = richTextToPlainText(f.deskripsi);

    // harga: number
    const harga = typeof f.harga === 'number' ? f.harga : null;

    // featured: "Yes" | "No" string OR boolean
    const featuredRaw = f.featured;
    const featured =
      featuredRaw === true ||
      featuredRaw === 'Yes' ||
      featuredRaw === 'yes' ||
      featuredRaw === true;

    return {
      id: item.sys.id,
      name: typeof f.name === 'string' ? f.name : String(f.name ?? ''),
      deskripsi,
      harga,
      kategori: typeof f.kategori === 'string' ? f.kategori : null,
      image: imageUrl,
      featured,
    };
  });
}
