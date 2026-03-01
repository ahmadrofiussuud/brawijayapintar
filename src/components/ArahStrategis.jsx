import React, { useEffect, useRef, useState } from 'react';
import { arahStrategis } from '../data';

function ArahStrategis() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // observer.disconnect(); // Keep observing or disconnect if we only want it once
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="strategi" className="strategi-section" ref={sectionRef}>
            <div className="strategi-container">
                <div className={`strategi-content ${isVisible ? 'is-visible' : ''}`}>
                    <div className="strategi-header-group">
                        <h2 className="strategi-title text-center">ARAH STRATEGIS<br />ORGANISASI</h2>
                        <p className="strategi-summary text-center mx-auto">Roadmap besar untuk mencetak mahasiswa unggul yang siap menembus beasiswa dan studi lanjut secara komprehensif.</p>
                    </div>

                    <div className="strategi-body-grid">
                        {/* Kiri: Deskripsi & Indikator */}
                        <div className="strategi-col">
                            <div className="strategi-group strateg-fade-1">
                                <div className="strategi-subtitle-wrapper">
                                    <h3 className="strategi-subtitle">Arah Utama (North Star)</h3>
                                    <div className="strategi-divider"></div>
                                </div>
                                <p className="strategi-text">{arahStrategis.northStar}</p>
                            </div>

                            <div className="strategi-group strateg-fade-2">
                                <div className="strategi-subtitle-wrapper">
                                    <h3 className="strategi-subtitle">Sasaran Strategis (Outcome)</h3>
                                    <div className="strategi-divider"></div>
                                </div>
                                <p className="strategi-text">{arahStrategis.outcomes[0]}</p>
                                <ul className="strategi-list asterisk-list">
                                    {arahStrategis.outcomes.slice(1).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="strategi-group strateg-fade-4">
                                <div className="strategi-subtitle-wrapper">
                                    <h3 className="strategi-subtitle">Prinsip Eksekusi</h3>
                                    <div className="strategi-divider"></div>
                                </div>
                                <ul className="strategi-list asterisk-list">
                                    {arahStrategis.principles.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="strategi-group strateg-fade-5">
                                <div className="strategi-subtitle-wrapper">
                                    <h3 className="strategi-subtitle">Indikator Keberhasilan</h3>
                                    <div className="strategi-divider"></div>
                                </div>
                                <p className="strategi-text">{arahStrategis.indicators}</p>
                            </div>
                        </div>

                        {/* Kanan: Pilar Strategi (Cards) */}
                        <div className="strategi-col">
                            <div className="strategi-group strateg-fade-3">
                                <div className="strategi-subtitle-wrapper">
                                    <h3 className="strategi-subtitle">Pilar Strategi (Strategic Pillars)</h3>
                                    <div className="strategi-divider"></div>
                                </div>
                                <div className="strategi-cards-grid">
                                    {arahStrategis.pillars.map((pillar, index) => (
                                        <div className="strategi-card" key={index}>
                                            <div className="strategi-card-number">{String(index + 1).padStart(2, '0')}</div>
                                            <div className="strategi-card-content">
                                                <h4 className="strategi-card-title">{pillar.title}</h4>
                                                <p className="strategi-card-desc">{pillar.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArahStrategis;
