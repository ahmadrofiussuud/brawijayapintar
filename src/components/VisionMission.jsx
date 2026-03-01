import React, { useEffect, useRef } from 'react';
import { visiMisiData } from '../data';
import './VisionMission.css';

// Reusable Components defined internally for this section
const SectionTitle = ({ title, className = '' }) => (
    <h2 className={`vision-title ${className}`}>{title}</h2>
);

const VisionMissionBlock = ({ label, content, isList = false }) => (
    <div className="vm-block">
        <h3 className="vm-label">{label}</h3>
        {isList ? (
            <ul className="vm-list modern-list">
                {content.map((item, index) => (
                    <li key={index}>
                        <span className="vm-number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="vm-list-text">{item}</span>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="vm-text">{content}</p>
        )}
    </div>
);

const ImagePanel = ({ src, alt, className = '' }) => (
    <div className={`image-panel ${className}`}>
        <img src={src} alt={alt} />
    </div>
);

const VisionMission = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: observer.unobserve(entry.target); 
                    // Uncomment above line to make it only animate once
                }
            });
        }, { threshold: 0.15 });

        if (sectionRef.current) {
            const anims = sectionRef.current.querySelectorAll('.animate-on-scroll');
            anims.forEach(el => observer.observe(el));

            return () => {
                anims.forEach(el => observer.unobserve(el));
            };
        }
    }, []);

    return (
        <section className="vision-mission-section" ref={sectionRef}>
            <div className="vm-container animate-on-scroll fade-in-up">
                <div className="vm-centered-layout">
                    <div className="vm-card">
                        <SectionTitle title="VISI & MISI" className="text-center" />

                        <div className="vm-content-wrapper">
                            <div className="vm-column">
                                <VisionMissionBlock
                                    label="VISI"
                                    content={visiMisiData.visi}
                                />
                            </div>

                            <div className="vm-column">
                                <VisionMissionBlock
                                    label="MISI"
                                    content={visiMisiData.misi}
                                    isList={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
