import React from 'react';
import { pengertianContent } from '../data';

function Pengertian() {
    return (
        <section id="pengertian" className="pengertian-section" aria-labelledby="pengertian-heading">
            <div className="pengertian-grain"></div>
            <div className="container pengertian-container">
                <h2 id="pengertian-heading" className="pengertian-title">
                    PENGERTIAN
                </h2>

                <div className="pengertian-divider" aria-hidden="true"></div>

                <p className="pengertian-text">
                    {pengertianContent.map((fragment, index) => (
                        <React.Fragment key={index}>
                            {fragment.isHighlight ? (
                                <span className="pengertian-highlight">{fragment.text}</span>
                            ) : (
                                fragment.text
                            )}
                        </React.Fragment>
                    ))}
                </p>

                <div className="pengertian-pagination left">04/10</div>
                <div className="pengertian-pagination right">04/10</div>
            </div>
        </section>
    );
}

export default Pengertian;
