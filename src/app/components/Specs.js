"use client";

import Image from 'next/image';

export default function Specs() {
    return (
        <section className="section specs" id="specs">
            <div className="container">
                <h2 className="section-title">Technical Specifications</h2>

                <div className="schematic-container">
                    <Image
                        src="/device-schematic-v2.png"
                        alt="Lithos Internal Schematic"
                        width={800}
                        height={600}
                        className="schematic-image"
                    />
                </div>

                <div className="specs-container">
                    <div className="spec-category">
                        <h3>Security & Core</h3>
                        <ul className="spec-list">
                            <li>
                                <span className="label">Secure Element</span>
                                <span className="value">EAL6+ Certified (ST33/SE050)</span>
                            </li>
                            <li>
                                <span className="label">MCU</span>
                                <span className="value">ARM Cortex-M (Low Power)</span>
                            </li>
                            <li>
                                <span className="label">Cryptography</span>
                                <span className="value">secp256k1, ed25519</span>
                            </li>
                            <li>
                                <span className="label">Isolation</span>
                                <span className="value">True "Black Box" Architecture</span>
                            </li>
                        </ul>
                    </div>

                    <div className="spec-category">
                        <h3>Hardware</h3>
                        <ul className="spec-list">
                            <li>
                                <span className="label">Display</span>
                                <span className="value">3.7" E-Ink Monochrome</span>
                            </li>
                            <li>
                                <span className="label">Touch</span>
                                <span className="value">Capacitive Multi-touch</span>
                            </li>
                            <li>
                                <span className="label">Biometrics</span>
                                <span className="value">Side-mounted Fingerprint</span>
                            </li>
                            <li>
                                <span className="label">Connectivity</span>
                                <span className="value">USB-C, BLE 5.0 (Air-gapped switch)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="spec-category">
                        <h3>Physical</h3>
                        <ul className="spec-list">
                            <li>
                                <span className="label">Materials</span>
                                <span className="value">Recycled Aluminum, Glass</span>
                            </li>
                            <li>
                                <span className="label">Thickness</span>
                                <span className="value">&lt; 6mm</span>
                            </li>
                            <li>
                                <span className="label">Battery</span>
                                <span className="value">Li-Po Pouch (Weeks of standby)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .specs {
          background: #0f0f0f;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .schematic-container {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
        }
        
        .schematic-image {
          width: 100%;
          max-width: 800px;
          height: auto;
          filter: invert(1);
          opacity: 0.9;
          border-radius: 1rem;
        }
        
        .specs-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }
        
        .spec-category h3 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 0.5rem;
        }
        
        .spec-list {
          list-style: none;
        }
        
        .spec-list li {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }
        
        .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }
        
        .value {
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        @media (max-width: 900px) {
          .specs-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </section>
    );
}
