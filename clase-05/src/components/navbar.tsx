"use client"
import Link from 'next/link';
import { logout } from "@/app/logout/actions";

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
          <div className="flex items-end gap-x-4 ms-auto">
            <Link href="/login">
              <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105">Login</button>
            </Link> 
            <form action={logout}>
              <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105">Logout</button>
            </form> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
