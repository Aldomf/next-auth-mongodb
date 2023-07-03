import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-white text-2xl font-semibold cursor-pointer">
                NextAuth
              </p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <Link href="/dashboard/profile">
                <p className="text-white hover:text-gray-300 cursor-pointer">
                  Profile
                </p>
              </Link>
            ) : (
              <>
                <Link href="/about">
                  <p className="text-white hover:text-gray-300 cursor-pointer">
                    About
                  </p>
                </Link>
                <Link href="/login">
                  <p className="text-white hover:text-gray-300 cursor-pointer">
                    Login
                  </p>
                </Link>
                <Link href="/register">
                  <p className="text-white hover:text-gray-300 cursor-pointer">
                    Sign up
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
