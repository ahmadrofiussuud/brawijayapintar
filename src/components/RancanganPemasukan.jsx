import React from 'react';
import { rancanganPemasukan } from '../data';

function RancanganPemasukan() {
    return (
        <section id="pemasukan" className="pemasukan-section" aria-labelledby="pemasukan-heading">
            <div className="pemasukan-grid">

                {/* Kolom Kiri - Konten */}
                <div className="pemasukan-content">
                    <h2 id="pemasukan-heading" className="pemasukan-title">
                        RANCANGAN SUMBER<br />PEMASUKAN
                    </h2>

                    <div className="proker-list">
                        {rancanganPemasukan.map((proker, index) => (
                            <div key={index} className="proker-card">
                                <h3 className="proker-card-title">{proker.title}</h3>
                                <div className="proker-card-body">
                                    <div className="proker-budget-row">
                                        <span className="proker-badge pengeluaran">Pengeluaran</span>
                                        <span className="proker-budget-text">
                                            {proker.pengeluaran.join(', ')}
                                            {proker.perkiraan_total && ` (Total ${proker.perkiraan_total})`}
                                        </span>
                                    </div>
                                    <div className="proker-card-divider"></div>
                                    <div className="proker-budget-row">
                                        <span className="proker-badge pemasukan">Pemasukan</span>
                                        <span className="proker-budget-text">
                                            {proker.pemasukan.join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pemasukan-actions">
                        <a href="#partnership" className="btn btn-primary btn-sm">Ajukan Partnership</a>
                        <a href="#proposal" className="btn btn-secondary btn-sm" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>Lihat Proposal</a>
                    </div>

                    <div className="pemasukan-pagination left">03/10</div>
                </div>

                {/* Kolom Kanan - Gambar */}
                <div className="pemasukan-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop"
                        alt="Ilustrasi keuangan beasiswa"
                        className="pemasukan-image"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>
    );
}

export default RancanganPemasukan;
