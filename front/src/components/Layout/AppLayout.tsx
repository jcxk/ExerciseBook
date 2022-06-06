//import Navbar from './navbar';
import AppFooter from '@/components/Layout/components/AppFooter';
import {useRouter} from "next/router";

export default function AppLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <header className=" bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center">
        <p>{router.route}</p>
        <div>
          <a
            href="/exercises/create"
            className="text-white hover:bg-gray-700 px-3 rounded py-1"
          >
            Create
          </a>
        </div>
      </header>
      <main className="">{children}</main>
      <AppFooter />
    </>
  );
}
