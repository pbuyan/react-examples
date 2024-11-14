import { Component } from 'react';
import * as fs from 'fs';
import path from 'path';
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
const SyntaxHighlighter = Prism as typeof Component<SyntaxHighlighterProps>;
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeHighlighter = ({ filePath }: { filePath: string }) => {
  const fPath = path.join(process.cwd(), 'data', filePath);
  const code = fs.readFileSync(fPath, 'utf-8');

  return (
    <SyntaxHighlighter style={darcula} language="javascript" code={code}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
