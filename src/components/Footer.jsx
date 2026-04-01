import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const WA_LINK = 'https://wa.me/6282138980041?text=Halo%20Posty%20Parfume%2C%20saya%20tertarik%20dengan%20produk%20kalian!';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Posty <em>Parfume</em></span>
          </div>
          <p className="footer__tagline">
            Be Different, Smell Different.
          </p>
          <p className="footer__desc">
            Brand parfume lokal dengan karakter. Kami percaya setiap orang berhak
            tampil beda — dimulai dari aroma yang mereka pilih.
          </p>

          {/* Socials */}
          <div className="footer__socials">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp Posty Parfume"
              id="footer-wa-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram Posty Parfume"
              id="footer-ig-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="TikTok Posty Parfume"
              id="footer-tiktok-link"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* Nav Links */}
        <div className="footer__nav">
          <h3 className="footer__nav-title">Navigasi</h3>
          <ul>
            {[
              { href: '#hero', label: 'Beranda' },
              { href: '#why', label: 'Keunggulan' },
              { href: '#products', label: 'Produk' },
              { href: '#testimonials', label: 'Ulasan' },
              { href: '#faq', label: 'FAQ' },
              { href: '#cta', label: 'Pesan Sekarang' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h3 className="footer__nav-title">Hubungi Kami</h3>
          <p>Punya pertanyaan? Kami siap membantu kamu menemukan parfume yang tepat.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary footer__cta"
            id="footer-cta-btn"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Chat WhatsApp
          </a>
          <p className="footer__number">+62 821-3898-0041</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>
            &copy; {year} Posty Parfume. Dibuat dengan{' '}
            <FontAwesomeIcon icon={faHeart} aria-label="cinta" />{' '}
            untuk pecinta aroma yang berbeda.
          </p>
        </div>
      </div>
    </footer>
  );
}
