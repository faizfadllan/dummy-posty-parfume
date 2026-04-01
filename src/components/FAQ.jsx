import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/FAQ.css';

const faqs = [
  {
    q: 'Apakah Posty Parfume 100% original?',
    a: 'Ya, 100%! Semua produk Posty Parfume dibuat dengan bahan baku asli dan berkualitas tinggi. Kami tidak menjual produk tiruan atau KW dalam bentuk apapun.',
  },
  {
    q: 'Berapa lama aroma Posty Parfume bisa bertahan?',
    a: 'Dengan konsentrasi formula yang lebih tinggi dibanding parfume standar, aroma Posty Parfume bisa bertahan rata-rata 8–12 jam di kulit. Tergantung jenis kulit dan aktivitas kamu.',
  },
  {
    q: 'Bagaimana cara memesan?',
    a: 'Kamu bisa langsung klik tombol "Pesan via WhatsApp" di website ini. Tim kami akan membantu proses pemesanan, konfirmasi stok, dan pengiriman dengan cepat.',
  },
  {
    q: 'Apakah ada garansi jika produk tidak sesuai?',
    a: 'Kami berkomitmen pada kepuasan pelanggan. Jika ada masalah dengan produk yang kamu terima (rusak, salah kirim), hubungi kami dalam 24 jam setelah barang diterima dan kami akan segera menyelesaikannya.',
  },
  {
    q: 'Apakah aman untuk kulit sensitif?',
    a: 'Ya! Kami menggunakan bahan-bahan alami yang aman dan telah melalui uji dermatologi. Namun jika kamu memiliki kondisi kulit tertentu, sebaiknya lakukan patch test terlebih dahulu.',
  },
  {
    q: 'Apakah melayani pengiriman ke seluruh Indonesia?',
    a: 'Tentu saja! Kami melayani pengiriman ke seluruh wilayah Indonesia. Ongkos kirim menyesuaikan lokasi dan ekspedisi yang dipilih saat pemesanan.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span>{item.q}</span>
        <FontAwesomeIcon icon={faChevronDown} className="faq-item__chevron" aria-hidden="true" />
      </button>
      <div
        className="faq-item__answer"
        id={`faq-a-${index}`}
        role="region"
        aria-labelledby={`faq-q-${index}`}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="faq" ref={sectionRef} aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header text-center reveal">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title" id="faq-title">
            Masih Ada Pertanyaan?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Kami jawab pertanyaan yang paling sering ditanyakan pelanggan kami.
          </p>
        </div>

        <div className="faq__list reveal">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
