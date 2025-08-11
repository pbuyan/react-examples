import React from 'react';

type Props = {
  code: string;
  language?: string;
  title?: string;
};

const CodeBlock: React.FC<Props> = ({ code, language = 'ts', title }) => {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert('Copied to clipboard');
    } catch {
      // ignore
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
      {title && (
        <div className="bg-slate-100 px-4 py-2 text-sm font-medium">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
      <div className="flex justify-end bg-slate-50 px-4 py-2">
        <button
          onClick={onCopy}
          className="rounded-md px-3 py-1 text-sm ring-1 ring-slate-300 hover:bg-slate-100"
        >
          Copy
        </button>
      </div>
    </div>
  );
};
export default CodeBlock;
