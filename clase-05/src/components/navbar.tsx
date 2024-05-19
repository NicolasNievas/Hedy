"use client"
import Link from 'next/link';
import { useDataContext } from "@/context/DataContext";
import { logout } from "@/app/logout/actions";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'; 

const Navbar = () => {
  const { user } = useDataContext();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  useEffect(() => {
    setIsLoggedIn(!!user); 
  }, [user]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="text-white text-xl font-semibold cursor-pointer">Books</div>
            </Link>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <p className="text-white mr-4">{`Hello ${user?.email}`}</p> {/* Mostrar el correo electrónico del usuario si está logueado */}
                <button onClick={handleLogout} className="text-white text-sm font-medium px-4 py-2 border border-transparent rounded-md shadow-sm bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <div className="text-white text-sm font-medium px-4 py-2 border border-transparent rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
