import React from 'react';
import { roadmapSteps } from '../data';

function Roadmap() {
    return (
        <section id="roadmap" className="section bg-light" aria-labelledby="roadmap-heading">
            <div className="container">
                <div className="section-header">
                    <h2 id="roadmap-heading">Roadmap Terstruktur</h2>
                    <p>Langkah demi langkah yang terukur. Jangan buang waktu pada hal yang tidak berdampak langsung terhadap hasil seleksi.</p>
                </div>

                <div id="roadmap-container" className="roadmap-stepper" style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
                    {roadmapSteps.map((step, index) => (
                        <div key={index} className="roadmap-item" style={{
                            display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'white',
                            padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--border)', transition: 'var(--transition)'
                        }}>
                            <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem' }}>
                                {index + 1}
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{step.name}</h3>
                                    <span style={{ fontSize: '0.875rem', background: 'var(--bg-subtle)', color: 'var(--text-muted)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid var(--border)' }}>
                                        {step.duration} &bull; {step.phase}
                                    </span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{step.details}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <a href="#gabung" className="btn btn-primary btn-lg">Ikuti Roadmap Kami</a>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
