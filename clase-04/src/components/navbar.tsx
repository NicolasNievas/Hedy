import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="text-white text-xl font-semibold cursor-pointer">Books</div>
            </Link>
          </div>
          <div>
            <Link href="/add">
              <div className="text-white text-xl font-semibold cursor-pointer">Add</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
