'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>(''); // Controlled input value
  const [results, setResults] = useState<string[]>([]); // Mock API results
  const [loading, setLoading] = useState<boolean>(false);

  // Debounced query value
  const debouncedQuery = useDebounce(query, 500); // 500ms debounce delay

  // Simulate API call
  const fetchResults = async (searchQuery: string) => {
    setLoading(true);
    // Simulating API response delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setResults([
      `${searchQuery} result 1`,
      `${searchQuery} result 2`,
      `${searchQuery} result 3`,
    ]);
    setLoading(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery); // Fetch API data only after debounce
    } else {
      setResults([]); // Clear results if query is empty
    }
  }, [debouncedQuery]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
