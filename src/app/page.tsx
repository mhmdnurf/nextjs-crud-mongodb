import { FaQuoteRight } from "react-icons/fa6";
interface Quote {
  id: string;
  quote: string;
  author: string;
}

async function getQuotes() {
  const res = await fetch(`https://dummyjson.com/quotes?limit=5`);
  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }
  return res.json();
}

export default async function Home() {
  const data = await getQuotes();
  return (
    <main className="p-24">
      <h1 className="font-semibold text-4xl text-zinc-600 text-center">
        <span className="flex space-x-4 justify-center">
          <p>All Quotes</p>
          <FaQuoteRight />
        </span>
      </h1>
      <ul className="mt-8 space-y-4">
        {data.quotes.map((quote: Quote) => (
          <li key={quote.id} className="p-4 bg-zinc-100 rounded-md">
            <p className="text-lg font-semibold">{quote.quote}</p>
            <p className="text-sm text-zinc-500">{quote.author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
