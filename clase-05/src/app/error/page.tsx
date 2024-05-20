import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
        <p className="text-lg text-gray-600 mb-4">Something went wrong.</p>
        <p className="text-gray-600 mb-8">The page you're looking for might be temporarily unavailable or you may have entered an incorrect URL.</p>
        <Link href="/">
          <div className="text-indigo-600 hover:text-indigo-700 font-semibold">Go back to home page</div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
