import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const WA_LINK = 'https://wa.me/6282138980041?text=Halo%20Posty%20Parfume%2C%20saya%20tertarik%20dengan%20produk%20kalian!';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#why', label: 'Keunggulan' },
    { href: '#products', label: 'Produk' },
    { href: '#testimonials', label: 'Ulasan' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Navigasi utama">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" aria-label="Posty Parfume - Home">
          <FontAwesomeIcon icon={faSprayCanSparkles} className="navbar__logo-icon" />
          <span className="navbar__logo-text">Posty <em>Parfume</em></span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
          id="navbar-cta-btn"
        >
          Beli Sekarang
        </a>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="navbar__drawer">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__drawer-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary navbar__drawer-cta"
                onClick={() => setMenuOpen(false)}
              >
                Beli Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
