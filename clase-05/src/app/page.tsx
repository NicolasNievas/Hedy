import { books } from '@/data/data';
import BookCard from '@/app/book/page';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Loading from '@/components/loading';
import Link from 'next/link';

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return (
      <>
        <Loading />
        {redirect('/login')}
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 bg-gray-200 bg-opacity-75 rounded-lg px-4 py-2">
          <Link href="/private">
            <p className="cursor-pointer">
              signed in as <span className="font-semibold">{data.user.email}</span>
            </p>
          </Link>
        </div>
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
