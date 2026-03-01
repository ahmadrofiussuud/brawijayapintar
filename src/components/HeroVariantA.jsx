import React from 'react';

function HeroVariantA() {
    return (
        <header className="hero" id="hero-variant-a" aria-labelledby="hero-heading-a">
            <div className="hero-bg-pattern"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Cohort Spring 2026 Dibuka
                    </div>

                    <h1 id="hero-heading-a" className="hero-title">Bangun Profil. Siapkan Dokumen. <span>Tembus Beasiswa.</span></h1>

                    <p className="hero-subtitle">Ekosistem persiapan studi lanjut yang berfokus pada hasil nyata. Dari review CV & SOP khusus dengan rubrik, hingga simulasi wawancara terstruktur bersama mentor alumni.</p>

                    <div className="hero-actions">
                        <a href="#gabung" className="btn btn-primary btn-lg" aria-label="Gabung form pendaftaran A">Gabung Ekosistem</a>
                        <a href="#roadmap" className="btn btn-secondary btn-lg js-scroll">Lihat Roadmap</a>
                    </div>

                    <div className="trust-bar">
                        <p className="trust-title">Keunggulan Ekosistem Kami</p>
                        <div className="trust-items">
                            <div className="trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <span>Mock interview terstruktur</span>
                            </div>
                            <div className=" trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                <span>Review CV & SOP dengan rubrik</span>
                            </div>
                            <div className="trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span>Roadmap persiapan per tahap</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-cards">
                        <div className="card stat-card float-1">
                            <div className="stat-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div className="stat-info">
                                <h3>500+</h3>
                                <p>Dokumen Di-review</p>
                            </div>
                        </div>

                        <div className="card stat-card float-2">
                            <div className="stat-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <div className="stat-info">
                                <h3>12 Minggu</h3>
                                <p>Program Intensif</p>
                            </div>
                        </div>

                        <div class="card stat-card float-3">
                            <div className="stat-icon" aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                            <div className="stat-info">
                                <h3>50+</h3>
                                <p>Mentor Awardee</p>
                            </div>
                        </div>

                        <div className="decorative-circle c-1"></div>
                        <div className="decorative-circle c-2"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeroVariantA;
