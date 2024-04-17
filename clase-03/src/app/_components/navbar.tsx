import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Libros.</h1>
        <div className="flex">
          <Link href="/" passHref>
            <button className="btn btn-success mr-4">Libros</button>
          </Link>
          <Link href="/characters" passHref>
            <button className="btn btn-success">Personajes</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
