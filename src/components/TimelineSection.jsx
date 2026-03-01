import React, { useState } from 'react';
import { timelineData } from '../data';

const TimelineSection = () => {
    const [activeTab, setActiveTab] = useState('semua');
    const [isCopied, setIsCopied] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const getFilteredTimeline = () => {
        let data = timelineData;
        if (activeTab !== 'semua') {
            data = timelineData.filter(item => item.category === activeTab);
        }
        // Pastikan urutan kronologis
        return data.sort((a, b) => a.order - b.order);
    };

    const filteredData = getFilteredTimeline();

    // --- Dynamic Stats Calculation ---
    const totalInternal = timelineData.filter(item => item.category === 'internal').length;
    const totalExternal = timelineData.filter(item => item.category === 'external').length;

    // Cari bulan paling padat
    const monthCounts = timelineData.reduce((acc, curr) => {
        acc[curr.month] = (acc[curr.month] || 0) + 1;
        return acc;
    }, {});
    const busiestMonth = Object.keys(monthCounts).reduce((a, b) => monthCounts[a] > monthCounts[b] ? a : b);

    // Event terdekat (Placeholder logic - ideally this would compare with new Date())
    // For now we'll hardcode the next logical upcoming event based on typical yearly academic cycles, or just pick the first one
    const upcomingEvent = "Screening (5–6 Sep)";

    const handleCopy = () => {
        let textToCopy = `TIMELINE SATU PERIODE - ${activeTab.toUpperCase()}\n\n`;
        filteredData.forEach(item => {
            textToCopy += `- ${item.date}: ${item.title}\n`;
        });

        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <section id="timeline" className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <h2 className="section-title text-center text-navy font-black">TIMELINE SATU PERIODE</h2>
                    <p className="section-subtitle text-center">Rangkaian agenda strategis untuk mencapai milestone organisasi bersama.</p>
                </div>

                {/* Summary Stats Row */}
                <div className="timeline-stats-row">
                    <div className="stat-card">
                        <div className="stat-value">{totalInternal}</div>
                        <div className="stat-label">Agenda Internal</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{totalExternal}</div>
                        <div className="stat-label">Agenda External</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{busiestMonth}</div>
                        <div className="stat-label">Bulan Terpadat</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value stat-text-value">{upcomingEvent}</div>
                        <div className="stat-label">Event Terdekat</div>
                    </div>
                </div>

                <div className="timeline-actions-wrapper">
                    <div className="segmented-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'semua' ? 'active' : ''}`}
                            onClick={() => handleTabChange('semua')}
                        >
                            <span className="tab-text">Semua</span>
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'internal' ? 'active' : ''}`}
                            onClick={() => handleTabChange('internal')}
                        >
                            <span className="tab-text">Internal</span>
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'external' ? 'active' : ''}`}
                            onClick={() => handleTabChange('external')}
                        >
                            <span className="tab-text">External</span>
                        </button>
                    </div>

                    <button className="copy-timeline-btn" onClick={handleCopy} title="Salin jadwal ke clipboard untuk keperluan proposal">
                        {isCopied ? 'Tersalin! ✅' : 'Salin Jadwal 📋'}
                    </button>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-grid">
                        {filteredData.map((item, index) => {
                            // Cek bulan sebelumnya khusus untuk tab external
                            const showMonthDivider = activeTab === 'external' &&
                                (index === 0 || item.month !== filteredData[index - 1].month);

                            return (
                                <React.Fragment key={`${item.title}-${index}-${activeTab}`}>
                                    {showMonthDivider && (
                                        <div className="timeline-month-divider fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                            <span className="month-badge">{item.month}</span>
                                        </div>
                                    )}
                                    <div
                                        className={`timeline-card-wrapper fade-in`}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-card-header">
                                                <span className="timeline-date">{item.date}</span>
                                                {activeTab === 'semua' && (
                                                    <span className={`timeline-badge ${item.category}`}>
                                                        {item.category === 'internal' ? 'Internal' : 'External'}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="timeline-card-title">{item.title}</h3>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
