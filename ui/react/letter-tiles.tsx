'use client';
import React, { useState } from 'react';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px',
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    color: '#000000',
  },
};

function Tile(props) {
  return (
    <button style={style.letter} onClick={() => props.onClick(props.letter)}>
      {props.letter}
    </button>
  );
}

const LetterTiles = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    // Replace 3 consecutive identical letters with "_"
    newString = newString.replace(/(.)\1{2}/g, '_');

    setOutputString(newString);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {alphabet.split('').map((letter) => (
          <Tile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
};

export default LetterTiles;
