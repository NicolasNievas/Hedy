import Link from 'next/link';

const BookCard = ({ book }: { book: any }) => {
  return (
    <Link href={`/book/${book.id}`}> 
      <div className="cursor-pointer">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <p className="mt-2 text-gray-600">{book.description}</p>
          <div className="flex items-center mt-4">
            <img className="w-8 h-8 rounded-full mr-2" src={book.authorImage} alt={book.authorName} />
            <div>
              <p className="text-gray-500">{book.authorName}</p>
              <p className="text-gray-500">{book.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
