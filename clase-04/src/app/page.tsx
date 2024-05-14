import { books } from '@/data/data';
import BookCard from '@/app/book/page'; 

const Home = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16">
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
    </div>
  );
};

export default Home;