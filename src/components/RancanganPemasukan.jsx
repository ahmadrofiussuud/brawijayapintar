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
                            <div key={index} className="proker-item">
                                <h3 className="proker-name">{proker.nama}</h3>
                                <ol className="proker-details">
                                    <li>Pengeluaran = {proker.pengeluaran}</li>
                                    <li>Pemasukan = {proker.pemasukan}</li>
                                </ol>
                            </div>
                        ))}
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
