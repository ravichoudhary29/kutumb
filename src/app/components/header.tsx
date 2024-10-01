"use client";
import { useAuth } from "@/app/providers/AuthProvider";
import { usePathname } from 'next/navigation';
import { PAGE_ROUTES } from "../libs/pages-routes";


const Header: React.FC = () => {
  const { handleLogout } = useAuth();
  const pathname = usePathname();
  const isLoginPage = pathname === PAGE_ROUTES.LOGIN;

  return (
    <header className="flex justify-end p-4 shadow-md bg-white">
      {!isLoginPage && <button
        className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300 ease-in-out"
        onClick={handleLogout}
      >
        Logout
      </button>
      }
    </header>
  );
};

export { Header };
