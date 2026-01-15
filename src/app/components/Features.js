"use client";

import Image from "next/image";

export default function Features() {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Engineered for <br />Perfection.</h2>
                </div>

                <div className="features-grid">
                    <div className="feature-card security">
                        <div className="feature-content">
                            <h3>Bank-Grade Security</h3>
                            <p>Powered by an EAL6+ Secure Element (ST33/SE050). Your private keys never leave the device.</p>
                        </div>
                    </div>

                    <div className="feature-card display">
                        <div className="feature-content">
                            <h3>E-Ink Display</h3>
                            <p>Always-on visibility with zero glare. 3.7 inch edge-to-edge monochrome screen.</p>
                        </div>
                    </div>

                    <div className="feature-card design">
                        <div className="feature-content">
                            <h3>Ultra-Thin Profile</h3>
                            <p>Less than 6mm thick. Machined from a single block of aerospace-grade aluminum.</p>
                        </div>
                        <div className="feature-image">
                            <Image
                                src="/device-angle.png"
                                alt="Side profile"
                                width={500}
                                height={300}
                                className="angle-image"
                            />
                        </div>
                    </div>

                    <div className="feature-card biometric">
                        <div className="feature-content">
                            <h3>Biometric Auth</h3>
                            <p>Integrated fingerprint sensor in the power button for instant, secure access.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .features-header {
          margin-bottom: 4rem;
          text-align: center;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 300px);
          gap: 1.5rem;
        }
        
        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 1.5rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.3s;
          overflow: hidden;
          position: relative;
        }
        
        .feature-card:hover {
          background: rgba(255,255,255,0.06);
        }
        
        .feature-card.design {
          grid-column: span 2;
          flex-direction: row;
          align-items: center;
        }
        
        .feature-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .feature-content p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .feature-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          height: 100%;
          position: relative;
        }
        
        .angle-image {
          object-fit: cover;
          height: 100%;
          width: auto;
          mask-image: linear-gradient(to left, black 80%, transparent 100%);
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          
          .feature-card.design {
            grid-column: span 1;
            flex-direction: column;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
}
