import React, { useEffect, useRef, useState } from 'react';
import { strukturKepengurusan } from '../data';

function StrukturKepengurusan() {
    const [isVisible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState({});
    const sectionRef = useRef(null);

    const toggleExpand = (index) => {
        setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="struktur-kepengurusan"
            ref={sectionRef}
            className="struktur-section"
            aria-labelledby="struktur-heading"
        >
            <div className="struktur-bg"></div>
            <div className="struktur-overlay"></div>
            <div className="struktur-grain"></div>

            <div className={`container struktur-container ${isVisible ? 'animate-up' : 'opacity-0'}`}>
                <h2 id="struktur-heading" className="struktur-title">
                    STRUKTUR<br />KEPENGURUSAN
                </h2>

                <div className="struktur-content">
                    <ul className="struktur-list">
                        {strukturKepengurusan.map((group, groupIndex) => (
                            <li key={groupIndex} className="struktur-group">
                                <div className="struktur-category-badge">{group.kategori}</div>
                                <ul className="struktur-sublist">
                                    {group.items.map((item, itemIndex) => {
                                        const globalIndex = `${groupIndex}-${itemIndex}`;
                                        const isExpanded = !!expanded[globalIndex];
                                        return (
                                            <li key={globalIndex} className={`struktur-item ${isExpanded ? 'expanded' : ''}`}>
                                                <button
                                                    className="struktur-header-btn"
                                                    onClick={() => toggleExpand(globalIndex)}
                                                    aria-expanded={isExpanded}
                                                    aria-controls={`struktur-desc-${globalIndex}`}
                                                >
                                                    <div className="struktur-header-left">
                                                        <span className="struktur-bullet"></span>
                                                        <div className="struktur-info">
                                                            <div className="struktur-role">{item.role}</div>
                                                            <div className="struktur-names-chips">
                                                                {item.names.map((name, nIndex) => (
                                                                    <span key={nIndex} className="struktur-chip">{name}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {item.description && (
                                                        <span className="struktur-chevron" aria-hidden="true">▼</span>
                                                    )}
                                                </button>
                                                {item.description && (
                                                    <div id={`struktur-desc-${globalIndex}`} className="struktur-desc-wrapper">
                                                        <p className="struktur-desc">{item.description}</p>
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Decorative Pagination matching the slide */}
            <div className="struktur-pagination left">05/10</div>
            <div className="struktur-pagination right">05/10</div>
        </section>
    );
}

export default StrukturKepengurusan;
