import { FaQuoteRight } from "react-icons/fa6";
interface Quote {
  _id: string;
  text: string;
  name: string;
}

async function getComments() {
  const res = await fetch(`http://localhost:3000/api/comments`);
  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }
  return res.json();
}

async function getQuotes() {
  const res = await fetch(`http://localhost:3000/api/quotes`);
  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }
  return res.json();
}

export default async function Home() {
  const data = await getComments();
  const dataQuotes = await getQuotes();
  console.log(dataQuotes);
  return (
    <main className="p-24">
      <h1 className="font-semibold text-4xl text-zinc-600 text-center">
        <span className="flex space-x-4 justify-center">
          <p>All Quotes</p>
          <FaQuoteRight />
        </span>
      </h1>
      <ul className="mt-8 space-y-4">
        {data.map((item: Quote) => (
          <li key={item._id} className="p-4 bg-zinc-100 rounded-md">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-sm text-zinc-500">{item.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
