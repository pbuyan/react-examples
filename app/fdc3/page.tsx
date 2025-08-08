'use client';

import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

const slides = [
  {
    title: 'FDC3 – Interoperability in Finance',
    content: [
      'Standard to enable app communication in financial desktops.',
      'Managed by FINOS (Open Source Foundation).',
      'Example: Click a stock in one app → opens chart in another.',
    ],
  },
  {
    title: 'What is FDC3?',
    content: [
      'Open standard for inter-app communication.',
      'Context sharing, action triggering, app discovery.',
      'No custom APIs between apps needed.',
    ],
  },
  {
    title: 'Key Concepts',
    content: [
      '📌 Context – standardized objects (e.g. fdc3.instrument).',
      '⚙️ Intents – predefined actions (e.g. ViewChart).',
      '📡 Channels – shared communication groups.',
      '🖥️ Desktop Agent – routes messages between apps.',
    ],
  },
  {
    title: 'How FDC3 Works',
    content: [
      'Without FDC3 → Custom integrations for each app pair.',
      'With FDC3 → Apps talk via a shared Desktop Agent.',
      'Scalable, consistent communication model.',
    ],
  },
  {
    title: 'Code Example',
    content: [
      `fdc3.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' } })`,
      `fdc3.addContextListener('fdc3.instrument', ctx => console.log(ctx))`,
    ],
  },
  {
    title: 'Benefits & Challenges',
    content: [
      '✅ Reduces integration time and effort.',
      '✅ Encourages app ecosystem collaboration.',
      '⚠️ Requires compatible Desktop Agent.',
      '⚠️ Learning curve for dev teams.',
    ],
  },
  {
    title: 'Popular Desktop Agents',
    content: [
      '🔹 OpenFin',
      '🔹 Glue42',
      '🔹 Finsemble',
      '🔹 Electron-based Agents',
    ],
  },
  {
    title: 'Conclusion',
    content: [
      'FDC3 = common language for desktop apps.',
      'Powerful for finance & trading ecosystems.',
      'Adoption is growing in financial institutions.',
    ],
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = () => setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div
        key={slide.title}
        // initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.4 }}
        className="w-full max-w-4xl rounded-2xl bg-white p-10 shadow-xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-800">{slide.title}</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">
          {slide.content.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex justify-between gap-4 text-gray-700">
        <button disabled={index === 0} onClick={prev}>
          ← Previous
        </button>
        <button disabled={index === slides.length - 1} onClick={next}>
          Next →
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Slide {index + 1} of {slides.length}
      </div>
    </div>
  );
}
