import React, { useState } from 'react';
import { faqs } from '../data';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section" aria-labelledby="faq-heading">
            <div className="container">
                <div className="section-header">
                    <h2 id="faq-heading">Pertanyaan Umum (FAQ)</h2>
                    <p>Semua yang perlu Anda ketahui sebelum memutuskan untuk bergabung dengan kami.</p>
                </div>
                <div id="faq-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    border: `1px solid ${isOpen ? 'var(--primary)' : 'var(--border)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    padding: '20px',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)',
                                    boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                                }}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, color: 'var(--accent)', fontSize: '1.05rem' }}>
                                    <span>{faq.question}</span>
                                    <span style={{ fontSize: '1.5rem', lineHeight: 1, marginLeft: '16px' }}>
                                        {isOpen ? '-' : '+'}
                                    </span>
                                </div>
                                {isOpen && (
                                    <div style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
