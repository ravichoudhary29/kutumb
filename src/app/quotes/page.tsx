'use client';
import React from "react";
import Image from "next/image";

import { withAuth } from "@/app/hocs/withAuth";
import { PAGE_ROUTES } from "@/app/libs/pages-routes";
import { useRouter } from 'next/navigation';
import { useQuotes } from "@/app/providers/QuotesProvider";

const QuoteList = () => {
  const router = useRouter();
  const { quotes, allQuotesFetched, fetchNextPage } = useQuotes();

  const handleCreateQuote = () => {
    router.push(PAGE_ROUTES.NEW_QUOTE);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="border rounded-lg sm:p-8 max-sm:p-4 bg-white shadow-xl relative">
        {/* Quotes Grid */}
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <div key={quote.id} className="relative rounded-lg text-center flex flex-col justify-center shadow-md h-[240px] w-[320px] overflow-hidden">
              {quote.mediaUrl && <Image src={quote.mediaUrl} alt={quote.text} width="320" height="240" className="absolute h-[100%] w-[100%] top-0 left-0 object-cover" />}
              <p className="font-medium text-lg">
                {quote.text}
              </p>
              <p className="mt-2 text-sm font-semibold">{quote.username}</p>
            </div>
          ))}
        </div>
        {quotes.length > 0 && !allQuotesFetched && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              onClick={fetchNextPage}
            >
              Load more
            </button>
          </div>
        )}

        {/* Floating Create Quote Button at the Bottom */}
        <div className="fixed right-4 bottom-4">
          <button className="bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition duration-300" onClick={handleCreateQuote}>
            Create Quote +
          </button>
        </div>
      </div>
    </div>
  );
};

const QuoteListWrapper = withAuth(QuoteList);

export default QuoteListWrapper;
