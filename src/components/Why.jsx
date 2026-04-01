import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask,
  faLeaf,
  faBolt,
  faHeart,
  faAward,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Why.css';

const reasons = [
  {
    icon: faFlask,
    title: 'Formula Eksklusif',
    desc: 'Setiap aroma kami diciptakan oleh perfumer profesional dengan bahan-bahan pilihan berkualitas tinggi.',
  },
  {
    icon: faLeaf,
    title: 'Natural & Aman',
    desc: 'Dibuat dari bahan baku alami, bebas bahan berbahaya, aman untuk kulit sensitif sekalipun.',
  },
  {
    icon: faBolt,
    title: 'Long-Lasting',
    desc: 'Konsentrasi parfume lebih tinggi menjamin aroma tahan lama di kulit hingga 8–12 jam.',
  },
  {
    icon: faHeart,
    title: 'Berkarakter Kuat',
    desc: 'Bukan parfume generik. Setiap varian punya "jiwa" — cerita di balik setiap semprotan.',
  },
  {
    icon: faAward,
    title: 'Kualitas Terbukti',
    desc: 'Lebih dari 1.200+ pelanggan setia yang sudah merasakan perbedaan nyata Posty Parfume.',
  },
  {
    icon: faTruck,
    title: 'Pengiriman Cepat',
    desc: 'Dikemas dengan teliti dan dikirim dengan cepat ke seluruh Indonesia. Aman, rapi, tiba tepat waktu.',
  },
];

export default function Why() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="why" ref={sectionRef} aria-labelledby="why-title">
      <div className="container">
        <div className="why__header text-center reveal">
          <span className="section-eyebrow">Kenapa Posty?</span>
          <h2 className="section-title" id="why-title">
            Kami Bukan Sekadar Parfume.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Di balik setiap botol Posty Parfume, ada komitmen nyata untuk kualitas,
            karakter, dan pengalaman wewangian yang tak terlupakan.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="why__card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="why__card-icon" aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="why__card-title">{item.title}</h3>
              <p className="why__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
