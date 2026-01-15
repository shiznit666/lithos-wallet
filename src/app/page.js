"use client";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Specs from "./components/Specs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Specs />

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lithos. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          padding: 4rem 0;
          text-align: center;
          color: var(--text-secondary);
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 4rem;
        }
      `}</style>
    </main>
  );
}
