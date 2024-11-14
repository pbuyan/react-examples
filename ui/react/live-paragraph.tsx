'use client';
import React, { useState } from 'react';

const LiveParagraph = () => {
  const [text, setText] = useState('');

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
};

export default LiveParagraph;
