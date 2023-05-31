import React from "react";

export default function Nav() {
  return <div>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Movie Vault</span> 
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path fillRule="evenodd" d="M2 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 5h16a1 1 0 010 2H2a1 1 0 010-2z"/>
            </svg>
            </button>
  </div>;
}
