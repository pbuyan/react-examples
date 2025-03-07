import React from 'react';
import ContextApi from '../../../../ui/react/context/language-context';
import CodeHighlighter from '#/ui/code-highlighter';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-center">Context API</h1>

      <div>
        <ContextApi />
        <hr />
        <CodeHighlighter filePath="/../ui/react/context/language-context.tsx" />
      </div>
    </div>
  );
}
