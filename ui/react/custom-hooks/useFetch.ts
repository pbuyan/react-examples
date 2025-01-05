import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  const fetchData = useCallback(async () => {
    setState({ data: null, error: null, loading: true });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setState({ data, error: null, loading: false });
    } catch (error) {
      if (error instanceof Error) {
        setState({ data: null, error: error.message, loading: false });
      } else {
        setState({
          data: null,
          error: 'An unknown error occurred',
          loading: false,
        });
      }
    }
  }, [url]);

  useEffect(() => {
    if (!url) {
      setState((prevState) => ({
        ...prevState,
        error: 'No URL provided',
        loading: false,
      }));
      return;
    }

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, [url, fetchData]);

  return state;
};

export default useFetch;
