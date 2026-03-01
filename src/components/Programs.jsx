import React from 'react';
import { programs } from '../data';

function Programs() {
    return (
        <section id="program" className="section bg-light" aria-labelledby="program-heading">
            <div className="container">
                <div className="section-header">
                    <h2 id="program-heading">Program Pilar Kami</h2>
                    <p>Formula komprehensif untuk memastikan aplikasi Anda siap disubmit dengan tingkat penerimaan maksimal.</p>
                </div>
                <div id="programs-grid" className="grid-3">
                    {programs.map((program, index) => (
                        <div key={index} className="program-card">
                            <div className="stat-icon" style={{ marginBottom: '24px' }}>
                                {program.icon}
                            </div>
                            <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{program.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{program.description}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <a href="#gabung" className="btn btn-primary btn-lg">Mulai Persiapan Sekarang</a>
                </div>
            </div>
        </section>
    );
}

export default Programs;
