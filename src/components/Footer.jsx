import React from 'react';

function Footer() {
    return (
        <footer className="footer" aria-label="Site Footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3>Brawijaya Pintar</h3>
                    <p>Siap Beasiswa. Siap Studi Lanjut.</p>
                </div>
                <div className="footer-links">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="#tentang">Tentang</a></li>
                        <li><a href="#program">Program</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-cta">
                    <h4>Sudah siap memulai?</h4>
                    <a href="#gabung" className="btn btn-primary">Gabung Sekarang</a>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; 2026 Brawijaya Pintar. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
