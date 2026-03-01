import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" aria-label="Main Navigation">
            <div className="container nav-wrapper">
                <a href="#" className="brand" aria-label="Brawijaya Pintar Home">Brawijaya Pintar</a>

                <button
                    className="mobile-toggle"
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-menu">
                    <li><a href="#" onClick={closeMenu}>Beranda</a></li>
                    <li><a href="#budaya" onClick={closeMenu}>Profil & Budaya</a></li>
                    <li><a href="#program" onClick={closeMenu}>Program Kerja</a></li>
                    <li><a href="#mentoring" onClick={closeMenu}>Mentoring</a></li>
                    <li><a href="#roadmap" onClick={closeMenu}>Timeline</a></li>
                    <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                </ul>

                <div className="nav-cta">
                    <a href="#gabung" className="btn btn-primary btn-sm" aria-label="Gabung ke form pendaftaran">Gabung</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
