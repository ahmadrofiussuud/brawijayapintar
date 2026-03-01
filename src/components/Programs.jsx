import React, { useEffect, useRef } from 'react';
import { prokerData } from '../data';
import './ProkerSection.css';

const BulletIcon = () => (
    <svg className="bullet-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PricingCard = ({ info }) => (
    <div className="pricing-card">
        <div className="class-type">{info.type}</div>
        <div className="class-price">{info.harga}</div>
        <ul className="class-details">
            <li><BulletIcon /> <span>{info.pertemuan}</span></li>
            <li><BulletIcon /> <span>{info.jumlah}</span></li>
            <li><BulletIcon /> <span>{info.durasi}</span></li>
            {info.via && <li><BulletIcon /> <span>Via: {info.via}</span></li>}
        </ul>
    </div>
);

function Programs() {
    const sectionRef = useRef(null);

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

    const data1 = prokerData.proker1;
    const data2 = prokerData.proker2;

    return (
        <section id="program" className="proker-section" ref={sectionRef}>
            <div className="proker-container">

                {/* PROKER 1 */}
                <div className="proker1-wrapper animate-on-scroll fade-in-up">
                    <div className="proker1-header">
                        <h2 className="proker1-title">{data1.title}</h2>
                    </div>

                    <div className="proker1-body">
                        <img src={data1.image} alt="Expo Beasiswa" className="proker1-image" />

                        <div className="proker1-content">
                            <div className="proker-desc-block">
                                <h4>Deskripsi:</h4>
                                <p>{data1.deskripsi}</p>
                            </div>

                            <div className="proker-method-block">
                                <h4>{data1.metode.title}</h4>
                                <p>{data1.metode.desc}</p>
                                <ul className="method-list">
                                    {data1.metode.points.map((point, idx) => (
                                        <li key={idx}>
                                            <BulletIcon />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROKER 2 */}
                <div className="proker2-wrapper animate-on-scroll fade-in-up" style={{ transitionDelay: '0.1s' }}>
                    <div className="proker2-header">
                        <h2 className="proker2-title">{data2.title}</h2>
                        <div className="proker2-method-title">{data2.metode_title}</div>
                    </div>

                    <div className="proker2-grid">

                        {/* Left Info Column */}
                        <div className="proker2-col-left">
                            <div className="proker-desc-block">
                                <h4>Deskripsi</h4>
                                <p>{data2.deskripsi}</p>
                            </div>

                            <ul className="proker2-info-list">
                                {data2.info_tambahan.map((info, idx) => (
                                    <li key={idx}>{info}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Pricing Column */}
                        <div className="proker2-col-right">
                            <div className="konseling-intro">
                                <strong>{data2.kelas_konseling.desc.split(':')[0]}:</strong>
                                {data2.kelas_konseling.desc.split(':')[1]}
                                <br /><br />
                                {data2.kelas_konseling.sub_desc}
                            </div>

                            <div className="pricing-group">
                                {/* Offline Classes */}
                                <div className="pricing-cards">
                                    {data2.kelas_offline.map((cls, idx) => (
                                        <PricingCard key={`off-${idx}`} info={cls} />
                                    ))}
                                </div>

                                {/* Online Classes */}
                                <div className="pricing-cards">
                                    {data2.kelas_online.map((cls, idx) => (
                                        <PricingCard key={`on-${idx}`} info={cls} />
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

export default Programs;
