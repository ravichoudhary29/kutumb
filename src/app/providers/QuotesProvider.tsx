'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useQuotesInternal, UseQuotesReturnType } from '@/app/hooks/useQuotesInternal';

// Create the context with an empty placeholder
const initialContext: UseQuotesReturnType = {
  quotes: [],
  fetchNextPage: () => { },
  allQuotesFetched: false,
  handleCreateQuote: () => Promise.resolve(),
  handleUploadImage: () => Promise.resolve(),
};

// Create the context
export const QuotesContext = createContext<UseQuotesReturnType>(initialContext);

export const useQuotes = () => useContext(QuotesContext);

export const QuotesProvider = ({ children }: { children: ReactNode; }) => {
  const value = useQuotesInternal();

  return <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>;
};
