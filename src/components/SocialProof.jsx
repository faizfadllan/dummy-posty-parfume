import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/SocialProof.css';

const testimonials = [
  {
    name: 'Rina Sartika',
    location: 'Bandung',
    rating: 5,
    text: 'Aku udah nyoba banyak parfume, tapi Posty beda banget! Aromanya ketahan dari pagi sampai malam. Banyak yang nanya aku pakai apa 😍',
    initial: 'R',
  },
  {
    name: 'Dimas Pratama',
    location: 'Jakarta',
    rating: 5,
    text: 'Awalnya ragu karena brand lokal, tapi ternyata kualitasnya premium banget! Ga kalah sama brand internasional mahal. Langsung repeat order.',
    initial: 'D',
  },
  {
    name: 'Aulia Fitriani',
    location: 'Surabaya',
    rating: 5,
    text: 'Suka banget sama konsepnya yang "berkarakter". Aku pilih varian yang sesuai kepribadianku dan beneran berasa cocok. Highly recommended!',
    initial: 'A',
  },
  {
    name: 'Marco Santoso',
    location: 'Medan',
    rating: 5,
    text: 'Pengirimannya cepat, kemasannya rapi dan estetik. Parfume-nya sendiri luar biasa — segar tapi bukan yang norak-norak. Mantap!',
    initial: 'M',
  },
  {
    name: 'Siti Nurfadilah',
    location: 'Yogyakarta',
    rating: 5,
    text: 'Posty Parfume is my new holy grail! Aromanya sophisticated, pas buat kerja maupun hangout. Temen-temen langsung nanya belinya di mana.',
    initial: 'S',
  },
  {
    name: 'Hafiz Ramadhan',
    location: 'Makassar',
    rating: 5,
    text: 'Langsung checkout pas lihat produknya karena penasaran. Dan Alhamdulillah ga kecewa! Bakal jadi langganan tetap nih. 10/10!',
    initial: 'H',
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? 'star--filled' : 'star--empty'}
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
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
    <section id="testimonials" className="social-proof" ref={sectionRef} aria-labelledby="testimonials-title">
      <div className="container">
        <div className="social-proof__header text-center reveal">
          <span className="section-eyebrow">Kata Mereka</span>
          <h2 className="section-title" id="testimonials-title">
            1.200+ Pelanggan Sudah Buktikan Sendiri.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Jangan percaya kata kami saja. Baca pengalaman nyata dari pelanggan setia Posty Parfume.
          </p>
        </div>

        {/* Stats Row */}
        <div className="social-proof__stats reveal">
          {[
            { value: '1.200+', label: 'Pelanggan Puas' },
            { value: '4.9/5', label: 'Rating Rata-rata' },
            { value: '98%', label: 'Repeat Order' },
            { value: '50+', label: 'Varian Aroma' },
          ].map((stat, i) => (
            <div key={i} className="social-proof__stat">
              <strong className="social-proof__stat-value">{stat.value}</strong>
              <span className="social-proof__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="social-proof__grid">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-card__quote-icon" aria-hidden="true" />
              <p className="testimonial-card__text">{t.text}</p>
              <StarRating rating={t.rating} />
              <footer className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.initial}</div>
                <div>
                  <cite className="testimonial-card__name">{t.name}</cite>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
