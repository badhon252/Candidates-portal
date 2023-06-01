import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          href="/"
          className="font-semibold text-xl tracking-tight font-mono"
        >
          Movie Vault
        </Link>
      </div>
      
        <div className="text-sm flex justify-center align-center sm:flex-grow">
          <Link
            href="/"
            className="block lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4 tex-2xl font-bold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4 tex-2xl font-bold"
          >
            About
          </Link>
        </div>
        {/* <div>
          <Link
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div> */}
    </nav>
  );
}
