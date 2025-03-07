'use client';
import React, { type ChangeEvent, useState } from 'react';

const ColorDropdown = () => {
  const [selectedColor, setSelectedColor] = useState<string>('Red'); // Default color

  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedColor(event.target.value); // Update state with selected color
  };

  return (
    <>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <p>You have selected: {selectedColor}</p>
    </>
  );
};

export default ColorDropdown;
