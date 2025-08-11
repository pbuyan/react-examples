import React, { useEffect, useMemo, useState } from 'react';
import type {
  DesktopAgent,
  Context,
  Channel,
  PrivateChannel,
  IntentResolution,
  Listener,
  AppIdentifier,
} from '@finos/fdc3';
import { getAgent } from '@finos/fdc3';

type UserChannel = {
  id: string;
  type: string;
  displayMetadata?: { name?: string; color?: string };
};

const Demo: React.FC = () => {
  const [fdc3, setFdc3] = useState<DesktopAgent | null>(null);
  const [info, setInfo] = useState<string>('');
  const [channels, setChannels] = useState<UserChannel[]>([]);
  const [joined, setJoined] = useState<string | null>(null);
  const [instrument, setInstrument] = useState('AAPL');
  const [log, setLog] = useState<string[]>([]);
  const [listener, setListener] = useState<Listener | null>(null);

  const addLog = (msg: string) =>
    setLog(
      (l) =>
        [new Date().toLocaleTimeString(), msg].join(' — ') + '\n' + l.join(''),
    );

  const connect = async () => {
    try {
      const agent = await getAgent({ timeoutMs: 1200 });
      setFdc3(agent);
      const version = await agent.getInfo?.();
      setInfo(version ? JSON.stringify(version) : 'Connected');
      const ucs = await agent.getUserChannels?.();
      if (ucs) setChannels(ucs as unknown as UserChannel[]);
      addLog('Connected to DesktopAgent');
    } catch (e: any) {
      setInfo(
        'No DesktopAgent detected. Use OpenFin/Finsemble/Connectifi or the FINOS FDC3 Chrome extension.',
      );
      addLog('Connection failed');
    }
  };

  useEffect(() => {
    // Try connecting once on mount (non-fatal if it fails)
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const join = async (id: string) => {
    if (!fdc3) return;
    await fdc3.joinUserChannel?.(id);
    setJoined(id);
    addLog(`Joined user channel ${id}`);
  };

  const startListening = async () => {
    if (!fdc3) return;
    listener?.unsubscribe();
    const l = await fdc3.addContextListener?.(
      'fdc3.instrument',
      (ctx: Context) => {
        addLog('Received context: ' + JSON.stringify(ctx));
      },
    );
    if (l) setListener(l);
    addLog('Listening for fdc3.instrument on current channel');
  };

  const broadcast = async () => {
    if (!fdc3) return;
    const ctx: Context = {
      type: 'fdc3.instrument',
      id: { ticker: instrument },
    };
    await fdc3.broadcast?.(ctx);
    addLog('Broadcast: ' + JSON.stringify(ctx));
  };

  const raiseViewInstrument = async () => {
    if (!fdc3) return;
    const ctx: Context = {
      type: 'fdc3.instrument',
      id: { ticker: instrument },
    };
    const res: IntentResolution | void = await fdc3.raiseIntent?.(
      'ViewInstrument',
      ctx,
    );
    addLog(
      'Raised ViewInstrument; resolution: ' +
        (res ? JSON.stringify(res, null, 2) : 'none'),
    );
  };

  const openExample = async () => {
    if (!fdc3) return;
    const app: AppIdentifier = { appId: 'Example Chart App' };
    const ctx: Context = {
      type: 'fdc3.instrument',
      id: { ticker: instrument },
    };
    await fdc3.open?.(app, ctx);
    addLog('Requested open of Example Chart App with context');
  };

  const createPrivate = async () => {
    if (!fdc3) return;
    const ch: PrivateChannel | void = await fdc3.createPrivateChannel?.();
    if (ch) {
      addLog('Created PrivateChannel id=' + (ch as any).id);
      const listener = await ch.addEventListener?.('disconnect', () =>
        addLog('PrivateChannel disconnect event'),
      );
      setListener(listener || null);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={connect}
          className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
        >
          Connect
        </button>
        <span className="text-sm text-slate-600">
          Status: {info || 'Not connected'}
        </span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Join a user channel
          </label>
          <div className="flex flex-wrap gap-2">
            {channels.map((c) => (
              <button
                key={c.id}
                onClick={() => join(c.id)}
                className={
                  'rounded-lg px-3 py-1.5 ring-1 ring-slate-300 ' +
                  (joined === c.id
                    ? 'bg-slate-900 text-white'
                    : 'hover:bg-slate-50')
                }
              >
                {c.displayMetadata?.name || c.id}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Instrument ticker
          </label>
          <input
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
            className="w-full rounded-lg px-3 py-2 ring-1 ring-slate-300"
            placeholder="AAPL"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={startListening}
              className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Listen
            </button>
            <button
              onClick={broadcast}
              className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Broadcast
            </button>
            <button
              onClick={raiseViewInstrument}
              className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Raise ViewInstrument
            </button>
            <button
              onClick={openExample}
              className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Open App
            </button>
            <button
              onClick={createPrivate}
              className="rounded-lg px-3 py-1.5 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Create PrivateChannel
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-sm font-medium">Log</label>
        <textarea
          readOnly
          className="h-40 w-full rounded-lg p-2 font-mono text-xs ring-1 ring-slate-300"
          value={log}
        />
      </div>
    </div>
  );
};

export default Demo;
