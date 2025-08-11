import React from 'react';
import Section from './components/Section';
import CodeBlock from './components/Code';
import Demo from './Fdc3Demo';

const codeConnect = `import { getAgent } from '@finos/fdc3'
const fdc3 = await getAgent({ timeoutMs: 750 })
const info = await fdc3.getInfo()
console.log('Connected to FDC3', info)`;

const codeListenBroadcast = `// Subscribe to instrument context on current User Channel
const listener = await fdc3.addContextListener('fdc3.instrument', (ctx) => {
  console.log('Got context', ctx)
})
// Broadcast to whoever is on the same User Channel
await fdc3.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' } })`;

const codeJoinChannels = `// Get user channels (aka system channels in <=2.1)
const channels = await fdc3.getUserChannels()
// Join one — only one joined at a time
await fdc3.joinUserChannel(channels[0].id)
const current = await fdc3.getCurrentChannel()`;

const codeRaiseIntent = `// Ask another app to view an instrument
const instrument = { type: 'fdc3.instrument', id: { ticker: 'MSFT' } }
const resolution = await fdc3.raiseIntent('ViewInstrument', instrument)
console.log('Handled by', resolution.source)`;

const codeHandleIntent = `// Inside an app that can display instruments
await fdc3.addIntentListener('ViewInstrument', async (context) => {
  // render the instrument and optionally return a result
  return { type: 'fdc3.instrument', id: { ticker: context.id.ticker } }
})`;

const codePrivateChannel = `// Streaming data via a PrivateChannel
// Handler app (server-side of the stream)
await fdc3.addIntentListener('QuoteStream', async (ctx) => {
  const ch = await fdc3.createPrivateChannel()
  // start pushing quotes when the client subscribes
  await ch.addEventListener('addContextListener', (e) => {
    const { ticker } = (ctx as any).id
    const interval = setInterval(() => {
      ch.broadcast({ type: 'price', price: Math.random() * 100, id: { ticker } })
    }, 1000)
    ch.addEventListener('disconnect', () => clearInterval(interval))
  })
  return ch
})

// Requesting app (client-side of the stream)
const res = await fdc3.raiseIntent('QuoteStream', { type: 'fdc3.instrument', id: { ticker: 'AAPL' } })
const result = await res.getResult()
if (result && 'addContextListener' in result) {
  const sub = await result.addContextListener('price', (quote) => console.log(quote))
  // Later: await sub.unsubscribe()
}`;

const codeOpen = `// Launch (or focus) a known app and pass context
await fdc3.open({ appId: 'Example Chart App' }, { type: 'fdc3.instrument', id: { ticker: 'AAPL' } })`;

const App: React.FC = () => {
  return (
    <div>
      <header className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <h1 className="text-2xl font-bold sm:text-3xl">
            FDC3 for Developers — Interactive Presentation
          </h1>
          <p className="mt-1 text-slate-300">
            Build interoperable desktop workflows with Intents, Context, and
            Channels
          </p>
        </div>
      </header>

      <Section
        title="What is FDC3?"
        subtitle="Open standard for desktop interoperability (apps can launch each other, share context, and request functionality)."
      >
        <ul className="ml-6 list-disc text-slate-700">
          <li>Standard API exposed by a Desktop Agent.</li>
          <li>
            Common language of <b>intents</b> (verbs) and <b>contexts</b>{' '}
            (nouns).
          </li>
          <li>
            User/App/Private <b>channels</b> for broadcast and streams.
          </li>
          <li>App Directory for discovery & routing.</li>
        </ul>
      </Section>

      <Section title="Connect from a Web App (FDC3 2.2)">
        <p className="text-slate-700">
          Use <code>getAgent()</code> from <code>@finos/fdc3</code>. It locates
          either an injected API (<code>window.fdc3</code>) or a proxy Desktop
          Agent.
        </p>
        <CodeBlock title="Connect to a Desktop Agent" code={codeConnect} />
      </Section>

      <Section title="Listen & Broadcast Context">
        <CodeBlock code={codeListenBroadcast} />
      </Section>

      <Section title="User Channels">
        <CodeBlock code={codeJoinChannels} />
      </Section>

      <Section title="Raise & Handle Intents">
        <div className="grid gap-4 sm:grid-cols-2">
          <CodeBlock title="Caller app" code={codeRaiseIntent} />
          <CodeBlock title="Handler app" code={codeHandleIntent} />
        </div>
      </Section>

      <Section title="Return a Stream via PrivateChannel">
        <CodeBlock code={codePrivateChannel} />
      </Section>

      <Section title="Open Another App">
        <CodeBlock code={codeOpen} />
      </Section>

      <Section title="Live Demo (works when run under an FDC3 Desktop Agent)">
        <Demo />
        <p className="mt-2 text-sm text-slate-600">
          Tip: easiest way to try locally is the FINOS FDC3 Chrome Extension or
          a platform like OpenFin / Finsemble / Connectifi.
        </p>
      </Section>

      <Section
        title="How we’d use this in our project"
        subtitle="Suggested patterns for your multi-app shell"
      >
        <ul className="ml-6 list-disc text-slate-700">
          <li>
            <b>Cross-app deep links:</b> resolve to FDC3 intents (e.g.,{' '}
            <i>ViewInstrument</i>) rather than hardcoding app URLs.
          </li>
          <li>
            <b>Channel-aware widgets:</b> all entity views listen for{' '}
            <code>fdc3.instrument</code> and update on broadcast.
          </li>
          <li>
            <b>Workflows:</b> raise intents for tasks like <i>ViewChart</i>,{' '}
            <i>ViewNews</i>, <i>StartChat</i> then await results.
          </li>
          <li>
            <b>Streams:</b> use PrivateChannels to deliver live price/order data
            tied to the originating request.
          </li>
        </ul>
      </Section>

      <footer className="py-10 text-center text-slate-500">
        <p>FDC3 2.2 APIs shown. Run this in an Agent for full functionality.</p>
      </footer>
    </div>
  );
};

export default App;
