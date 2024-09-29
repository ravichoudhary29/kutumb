'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/app/providers/AuthProvider';
import { QUOTE_LIST_URL } from '@/app/utils/consts';
import { TQuote } from '@/app/definitions/quote';

export const useQuotesInternal = () => {
  const { token, handleLogout } = useAuth();
  const [quotes, setQuotes] = useState<Array<TQuote>>([]);

  useEffect(() => {
    async function init() {
      if (!token) return;
      try {
        const response = await fetch(QUOTE_LIST_URL, {
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
        setQuotes(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, [token]);

  const handleUploadImage = useCallback((file: File) => {}, []);

  const handleCreateQuote = useCallback(() => {}, []);

  return {
    quotes,
    handleUploadImage,
    handleCreateQuote,
  };
};

// Define the type for the return value of useQuotesInternal
export type UseQuotesReturnType = ReturnType<typeof useQuotesInternal>;
