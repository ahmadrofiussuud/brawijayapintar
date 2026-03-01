import React, { useState, useEffect, useRef } from 'react';
import { budayaOrganisasiData } from '../data';
import './CultureSection.css';

const CultureSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);
    const activeData = budayaOrganisasiData[activeIndex];

    // Handle scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            const anims = sectionRef.current.querySelectorAll('.animate-on-scroll');
            anims.forEach(el => observer.observe(el));
            return () => anims.forEach(el => observer.unobserve(el));
        }
    }, []);

    // Handle smooth transition when changing active item
    const handleMenuClick = (index) => {
        if (index === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 150); // Short crossfade effect
    };

    return (
        <section id="budaya" className="culture-section-focus" ref={sectionRef}>
            <div className="container animate-on-scroll fade-in-up">

                <div className="culture-focus-header">
                    <h2 className="focus-title">Budaya Organisasi</h2>
                    <p className="focus-subtitle">Framework 4M + 2P</p>
                </div>

                <div className="culture-focus-grid">

                    {/* Left Column: Menu list with timeline */}
                    <div className="focus-sidebar">
                        <ul className="focus-menu-list">
                            {/* Track mathematically locked to the center of the 48px wrappers */}
                            <div className="timeline-track">
                                <div className="timeline-progress" style={{ height: `${(activeIndex / (budayaOrganisasiData.length - 1)) * 100}%` }}></div>
                            </div>

                            {budayaOrganisasiData.map((item, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <li
                                        key={item.id}
                                        className={`focus-menu-item ${isActive ? 'active' : ''}`}
                                        onClick={() => handleMenuClick(index)}
                                    >
                                        <div className="timeline-dot-wrapper">
                                            <div className="timeline-dot"></div>
                                        </div>
                                        <span className="menu-item-text">{item.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right Column: Active Item Detail Panel */}
                    <div className="focus-content-panel">
                        <div className={`focus-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            <div className="focus-card-header">
                                <span className="focus-card-badge">{activeData.id.toUpperCase()}</span>
                                <h3 className="focus-card-title">{activeData.title}</h3>
                            </div>

                            <p className="focus-card-def">{activeData.desc}</p>

                            <div className="focus-behaviors">
                                <h4 className="behaviors-label">Contoh Perilaku:</h4>
                                <ul className="behaviors-list">
                                    {activeData.behaviors.map((behavior, idx) => (
                                        <li key={idx}>
                                            <svg className="focus-bullet-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{behavior}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CultureSection;
