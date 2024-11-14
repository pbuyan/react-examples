import React from 'react';
import PhoneBook from '../../../ui/react/phone-book';
import CodeHighlighter from '#/ui/code-highlighter';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-center">Phone Book</h1>

      <div>
        <PhoneBook />
        <CodeHighlighter filePath="/../ui/react/phone-book.tsx" />
      </div>
    </div>
  );
}
