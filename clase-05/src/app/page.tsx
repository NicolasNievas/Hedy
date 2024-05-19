import { logout } from "@/app/logout/actions";
import { books } from '@/data/data';
import BookCard from '@/app/book/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Opinions about books</h2>
            <p className="mt-4 text-lg text-gray-600">Find out what people think about some popular books.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
    </main>
  );
}
