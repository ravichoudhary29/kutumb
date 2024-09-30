'use client';

import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '@/app/providers/AuthProvider';
import { QUOTE_LIST_URL, QUOTES_PER_PAGE_SIZE } from '@/app/utils/consts';
import { TQuote } from '@/app/definitions/quote';

export const useQuotesInternal = () => {
  const { token, handleLogout } = useAuth();
  const [quotes, setQuotes] = useState<Array<TQuote>>([]);
  const [page, setPage] = useState<number | null>(0);

  useEffect(() => {
    async function init() {
      if (!token || page === null) return;
      try {
        const route = `${QUOTE_LIST_URL}?limit=${QUOTES_PER_PAGE_SIZE}&offset=${
          page * QUOTES_PER_PAGE_SIZE
        }`;
        const response = await fetch(route, {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 401 || response.status === 403) {
          handleLogout();
          return;
        }
        const data: { data: Array<TQuote> } = await response.json();
        const nextPageQuotesList = data.data;
        if (nextPageQuotesList.length === 0) {
          setPage(null);
        } else {
          setQuotes((currentQuotesList) => [
            ...currentQuotesList,
            ...nextPageQuotesList,
          ]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, [token, handleLogout, page]);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => (prev === null ? prev : prev + 1));
  }, []);

  const handleUploadImage = useCallback(() => {}, []);

  const handleCreateQuote = useCallback(() => {}, []);

  return {
    quotes,
    fetchNextPage,
    allQuotesFetched: page === null,
    handleUploadImage,
    handleCreateQuote,
  };
};

// Define the type for the return value of useQuotesInternal
export type UseQuotesReturnType = ReturnType<typeof useQuotesInternal>;
