Spec Bisnis, Desain, Teknis, Data

Buatukan saya website berbasis ReactJs terbaru untuk brand parfume bernama "Posty Parfume" dimana dia menyediakan produk parfume yg beda dari yang lain dan mempunyai karakter. Dalam website ini atau landing page ini gunakan copywriting yang baik sehingga bisa menarik konsumen dalam mengklik tombol beli.

Dalam prinsipnya gunakan teknik AIDA.

Gunakan flat design dalam css di web ini dengan basic warna (peach dan turunannya) dengan color pallete yang sesuai, contoh bisa di akses di https://colorhunt.co/palettes/peach.

Berikut adalah contoh sample warna yang bisa di gunakan :
#FEEAC9
#FFCDC9
#FDACAC
#FD7979

Gunakan icon dari fontawesome, jangan gunakan emoji web.

Dalam struktur web ini gunakan section seperti :
- Hero
- Why
- Product List
- CTA (Tombol ini mengarah ke prefill text whatsapp ke nomor 082138980041)
- Social Proof
- Dan section lain yang relevan dalam konsep AIDA.

Pada product list silakan consume data dari Contentful CMS, gunakan library contentful yang sudah proven, jangan membuat fetch sendiri. Dengan credentials :
- Spaces ID "gwu9kb1zs83n"
- Access Token "eDWINknXObqork1rw8LbleJUC1RvgEeh0b71ay46VLA"
- Content Type "postyParfume".

Field yang digunakan dalam consume API ini adalah :
- name
- deskripsi
- harga
- kategori
- image
- featured

jangan ambil field lain karena tidak ada, ikuti yang tertulis saja.