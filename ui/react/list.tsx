'use client';

import { ChangeEvent, useState } from 'react';
import Button from '../button';

const List: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  const addItem = (): void => {
    const trimmedItem = newItem.trim();
    if (trimmedItem && !items.includes(trimmedItem)) {
      setItems([...items, trimmedItem]);
      setNewItem('');
    }
  };

  const removeItem = (itemToRemove: string) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewItem(e.target.value);
  };

  return (
    <div className="max-w-96">
      <div className="mb-5">
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder={'Add new item'}
          className="mr-1 w-2/3 rounded border border-gray-50 p-2 text-gray-500"
        />
        <Button
          onClick={() => addItem()}
          className="rounded bg-slate-600 px-4 py-2"
        >
          Add
        </Button>
      </div>
      <ul className="list-none p-0">
        {items.map((item, i) => (
          <li
            key={item}
            className="mb-2 flex items-center justify-between rounded border border-[#ccc] p-2"
          >
            <span>{item}</span>
            <Button kind="error" onClick={() => removeItem(item)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
