"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Security, <br />
          <span className="text-gradient">Refined.</span>
        </h1>
        <p className="hero-subtitle">
          The world's first E-Ink cold wallet with EAL6+ security.
          <br />
          Ultra-thin. Biometric. Unhackable.
        </p>
        <div className="hero-actions">
          <a href="#preorder" className="btn-primary">Pre-order Now</a>
          <a href="#specs" className="btn-secondary">Tech Specs</a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-glow"></div>
        <Image
          src="/real-device.jpg"
          alt="Lithos Wallet"
          width={800}
          height={600}
          className="hero-device"
          priority
        />
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 6rem;
          overflow: hidden;
          position: relative;
        }
        
        .hero-content {
          z-index: 2;
          margin-bottom: 4rem;
        }
        
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        .hero-image-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          display: flex;
          justify-content: center;
          z-index: 1;
        }
        
        .hero-device {
          width: 100%;
          height: auto;
          max-width: 600px;
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
