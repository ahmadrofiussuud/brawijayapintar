import React from 'react';

function Mentoring() {
    return (
        <section id="mentoring" className="section" aria-labelledby="mentoring-heading">
            <div className="container">
                <div className="section-header">
                    <h2 id="mentoring-heading">Bimbingan Intensif 1-on-1</h2>
                    <p>Kami tahu setiap profil itu unik. Mentoring eksklusif membedah potensi Anda secara personal, bukan sekadar generalis.</p>
                </div>

                <div id="mentoring-content" style={{ display: 'flex', gap: '40px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Setiap feedback membawa Anda lebih dekat ke LoA.</h3>
                        <ul style={{ marginBottom: '32px' }}>
                            <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <div><strong>Diagnosis Awal:</strong><br /><span style={{ color: 'var(--text-muted)' }}>Pemetaan gap profil vs kualifikasi beasiswa pilihan.</span></div>
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <div><strong>Strategic Review:</strong><br /><span style={{ color: 'var(--text-muted)' }}>Revisi essay berkali-kali hingga argumen tajam.</span></div>
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <div><strong>Simulasi Realistis:</strong><br /><span style={{ color: 'var(--text-muted)' }}>Mock interview dengan standar pewawancara asli.</span></div>
                            </li>
                        </ul>
                        <a href="#gabung" className="btn btn-secondary btn-lg">Jadwalkan Mentoring</a>
                    </div>

                    <div style={{ flex: 1, minWidth: '300px', background: 'var(--bg-gradient)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--primary)' }}>
                                👤
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--accent)', fontSize: '1.125rem' }}>Mentor Alumni Tervalidasi</h4>
                                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>LPDP, AAS, Chevening, Fulbright</p>
                            </div>
                        </div>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.8 }}>"Bukan sekadar memberi saran, kami memberikan standard nyata apa yang dicari oleh panelis beasiswa."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mentoring;
