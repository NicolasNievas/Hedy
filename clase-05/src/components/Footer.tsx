import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-white text-sm lg:text-base text-center">
          &copy; {new Date().getFullYear()} 
          <Link
            className="font-extralight hover:text-blue-500 ml-1"
            href="https://github.com/NicolasNievas"
            target="_blank"
          >
            Nicolas Nievas 
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
