import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export default function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setState({ data: null, error: null, loading: true });

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = (await response.json()) as T;
        if (isMounted) {
          setState({ data: result, error: null, loading: false });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            error: (error as Error).message,
            loading: false,
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return state;
}
