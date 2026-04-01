import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faShieldHalved, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../styles/CTASection.css';

const WA_LINK = 'https://wa.me/6282138980041?text=Halo%20Posty%20Parfume%2C%20saya%20tertarik%20dengan%20produk%20kalian!';

const guarantees = [
  { icon: faShieldHalved, label: 'Garansi Kualitas' },
  { icon: faTruck, label: 'Pengiriman Cepat' },
  { icon: faHeadset, label: 'CS Responsif' },
];

export default function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="cta-section" ref={sectionRef} aria-labelledby="cta-title">
      {/* Decorative */}
      <div className="cta-section__deco cta-section__deco--1" aria-hidden="true"></div>
      <div className="cta-section__deco cta-section__deco--2" aria-hidden="true"></div>

      <div className="container cta-section__inner">
        <div className="cta-section__content reveal">
          <span className="section-eyebrow" style={{ color: '#FEEAC9' }}>
            Tunggu Apa Lagi?
          </span>
          <h2 className="section-title cta-section__title" id="cta-title">
            Rasakan Perbedaannya.<br />
            <em>Hari Ini Juga.</em>
          </h2>
          <p className="cta-section__subtitle">
            Ribuan pelanggan sudah menemukan aroma yang mencerminkan diri mereka.
            Sekarang giliran kamu. Hubungi kami sekarang dan dapatkan rekomendasi
            parfume yang paling cocok untukmu — gratis!
          </p>

          {/* Guarantees */}
          <div className="cta-section__guarantees">
            {guarantees.map((g, i) => (
              <div key={i} className="cta-section__guarantee">
                <FontAwesomeIcon icon={g.icon} />
                <span>{g.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="cta-section__actions">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-section__wa-btn"
              id="main-cta-wa-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="cta-section__wa-icon" />
              <div className="cta-section__wa-text">
                <span>Chat Sekarang di WhatsApp</span>
                <small>Respon cepat, ramah, siap bantu!</small>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
