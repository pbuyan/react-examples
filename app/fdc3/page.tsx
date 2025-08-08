'use client';

import React, { useState, useCallback, useEffect } from 'react';
// import List from "../../../ui/react/list";
// import CodeHighlighter from "#/ui/code-highlighter";

const slidesData = [
  // 0
  <div>
    <div className="logo-placeholder">📊</div>
    <h1>FDC3</h1>
    <p className="subtitle">
      Financial Desktop Connectivity and Collaboration Consortium
    </p>
    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
      Open Standards for Financial Desktop Interoperability
    </p>
  </div>,
  // 1
  <div>
    <h2>What is FDC3?</h2>
    <ul>
      <li>
        <strong>Open Standard</strong> for desktop application interoperability
        in financial services
      </li>
      <li>
        <strong>Industry Initiative</strong> led by FINOS (Fintech Open Source
        Foundation)
      </li>
      <li>
        <strong>Vendor-neutral</strong> approach to connecting financial
        applications
      </li>
      <li>
        <strong>Context sharing</strong> and <strong>intent-based</strong>{' '}
        communication protocol
      </li>
    </ul>
  </div>,
  // 2
  <div>
    <h2>The Problem</h2>
    <ul>
      <li>
        <strong>Siloed Applications:</strong> Financial professionals use
        multiple disconnected apps
      </li>
      <li>
        <strong>Manual Data Entry:</strong> Copy-paste workflows between systems
      </li>
      <li>
        <strong>Lost Context:</strong> Information doesn't flow between
        applications
      </li>
      <li>
        <strong>Vendor Lock-in:</strong> Proprietary integration methods
      </li>
      <li>
        <strong>Reduced Productivity:</strong> Time wasted switching between
        tools
      </li>
    </ul>
  </div>,
  // 3
  <div>
    <h2>FDC3 Architecture</h2>
    <div className="diagram">
      <div className="box">
        App A<br />
        📈
      </div>
      <div className="arrow">↔</div>
      <div className="box">
        FDC3 Desktop Agent
        <br />
        🔗
      </div>
      <div className="arrow">↔</div>
      <div className="box">
        App B<br />
        📊
      </div>
    </div>
    <p>
      Applications communicate through a{' '}
      <span className="highlight">Desktop Agent</span> that manages context and
      intents
    </p>
  </div>,
  // 4
  <div>
    <h2>Core Concepts</h2>
    <div className="two-column">
      <div>
        <h3>🎯 Context</h3>
        <p>
          Structured data objects representing financial entities (instruments,
          contacts, portfolios)
        </p>

        <h3>💡 Intents</h3>
        <p>
          Actions that applications can perform (ViewChart, StartCall,
          ViewQuote)
        </p>
      </div>
      <div>
        <h3>📱 Apps</h3>
        <p>FDC3-enabled applications that can share and receive context</p>

        <h3>🔗 Desktop Agent</h3>
        <p>
          Runtime that manages app discovery, context sharing, and intent
          resolution
        </p>
      </div>
    </div>
  </div>,
  // 5
  <div>
    <h2>Standard Context Types</h2>
    <ul>
      <li>
        <strong>fdc3.instrument:</strong> Financial instruments (stocks, bonds,
        derivatives)
      </li>
      <li>
        <strong>fdc3.contact:</strong> People and organizations
      </li>
      <li>
        <strong>fdc3.portfolio:</strong> Investment portfolios
      </li>
      <li>
        <strong>fdc3.position:</strong> Trading positions
      </li>
      <li>
        <strong>fdc3.trade:</strong> Trade transactions
      </li>
      <li>
        <strong>fdc3.chart:</strong> Chart configurations
      </li>
    </ul>
  </div>,
  // 6
  <div>
    <h2>Common Intents</h2>
    <ul>
      <li>
        <strong>ViewChart:</strong> Display a chart for a financial instrument
      </li>
      <li>
        <strong>ViewQuote:</strong> Show current pricing information
      </li>
      <li>
        <strong>ViewNews:</strong> Display relevant news articles
      </li>
      <li>
        <strong>StartCall:</strong> Initiate communication with a contact
      </li>
      <li>
        <strong>ViewProfile:</strong> Show detailed information about an entity
      </li>
      <li>
        <strong>ViewResearch:</strong> Display research reports
      </li>
    </ul>
  </div>,
  // 7
  <div>
    <h2>FDC3 in Action</h2>
    <div className="code-block">
      <pre>
        {`fdc3.broadcast({
  type: 'fdc3.instrument',
  id: { ticker: 'AAPL' },
  name: 'Apple Inc.'
});

// Raising an intent
fdc3.raiseIntent('ViewChart', {
  type: 'fdc3.instrument',
  id: { ticker: 'AAPL' }
});`}
      </pre>
    </div>
    <p>Simple APIs enable seamless application integration</p>
  </div>,
  // 8
  <div>
    <h2>Benefits</h2>
    <div className="two-column">
      <div>
        <h3>For Users</h3>
        <ul>
          <li>Seamless workflows</li>
          <li>Reduced manual work</li>
          <li>Faster decision making</li>
          <li>Better user experience</li>
        </ul>
      </div>
      <div>
        <h3>For Organizations</h3>
        <ul>
          <li>Vendor independence</li>
          <li>Lower integration costs</li>
          <li>Increased productivity</li>
          <li>Future-proof technology</li>
        </ul>
      </div>
    </div>
  </div>,
  // 9
  <div>
    <h2>Implementation Options</h2>
    <ul>
      <li>
        <strong>Browser-based:</strong> Web applications using FDC3 Web API
      </li>
      <li>
        <strong>Desktop Containers:</strong> Electron, OpenFin, Finsemble
      </li>
      <li>
        <strong>Native Applications:</strong> Desktop apps with FDC3 support
      </li>
      <li>
        <strong>Mobile:</strong> Emerging mobile FDC3 implementations
      </li>
    </ul>
    <p style={{ marginTop: '30px' }}>
      Choose based on your technology stack and deployment requirements
    </p>
  </div>,
  // 10
  <div>
    <h2>Getting Started</h2>
    <ul>
      <li>
        <strong>Explore the Specification:</strong> fdc3.finos.org
      </li>
      <li>
        <strong>Join the Community:</strong> FINOS FDC3 working groups
      </li>
      <li>
        <strong>Try the Examples:</strong> FDC3 demo applications
      </li>
      <li>
        <strong>Choose a Desktop Agent:</strong> OpenFin, Finsemble, or web
        implementation
      </li>
      <li>
        <strong>Start Small:</strong> Begin with context sharing between 2 apps
      </li>
    </ul>
  </div>,
  // 11
  <div>
    <h1>Questions?</h1>
    <p className="subtitle">Thank you for your attention</p>
    <div style={{ marginTop: '40px' }}>
      <p>🌐 fdc3.finos.org</p>
      <p>📧 fdc3@finos.org</p>
      <p>💬 Join the FINOS Slack</p>
    </div>
  </div>,
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide]);

  return (
    <div>
      <div className="prose prose-sm prose-invert max-w-none">
        <div className="presentation-container">
          <div className="slide-counter">
            <span id="current-slide">{currentSlide + 1}</span> /{' '}
            <span id="total-slides">{totalSlides}</span>
          </div>

          {slidesData.map((slide, idx) => (
            <div
              key={idx}
              className={`slide${idx === currentSlide ? ' active' : ''}`}
              style={{ display: idx === currentSlide ? 'block' : 'none' }}
            >
              {slide}
            </div>
          ))}

          <div className="navigation">
            <button
              className="nav-btn"
              id="prev-btn"
              onClick={previousSlide}
              disabled={currentSlide === 0}
            >
              ← Previous
            </button>
            <button
              className="nav-btn"
              id="next-btn"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          overflow: hidden;
        }

        .presentation-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .slide {
          flex: 1;
          padding: 60px;
          display: none;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .slide.active {
          display: flex;
          animation: slideIn 0.6s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide h1 {
          font-size: 3.5rem;
          margin-bottom: 30px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide h2 {
          font-size: 2.8rem;
          margin-bottom: 25px;
          color: #ffd700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slide h3 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          color: #87ceeb;
        }

        .slide p,
        .slide li {
          font-size: 1.4rem;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .slide ul {
          text-align: left;
          max-width: 800px;
          margin: 0 auto;
        }

        .slide li {
          margin-bottom: 20px;
          padding-left: 10px;
          position: relative;
        }

        .slide li:before {
          content: '▶';
          color: #ffd700;
          position: absolute;
          left: -20px;
        }

        .navigation {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 1000;
        }

        .nav-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 24px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .slide-counter {
          position: fixed;
          top: 30px;
          right: 30px;
          background: rgba(0, 0, 0, 0.3);
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
        }

        .code-block {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          padding: 20px;
          font-family: 'Courier New', monospace;
          font-size: 1.1rem;
          text-align: left;
          margin: 20px 0;
          border-left: 4px solid #ffd700;
        }

        .highlight {
          color: #ffd700;
          font-weight: bold;
        }

        .diagram {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 30px 0;
        }

        .box {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 15px;
          padding: 20px;
          margin: 10px;
          min-width: 150px;
          backdrop-filter: blur(10px);
        }

        .arrow {
          font-size: 2rem;
          color: #ffd700;
        }

        .subtitle {
          font-size: 1.8rem;
          color: #e0e7ff;
          margin-bottom: 30px;
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          text-align: left;
          max-width: 1200px;
        }

        .logo-placeholder {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          margin: 20px auto;
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}
