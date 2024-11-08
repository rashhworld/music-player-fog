import React from "react";

const Navbar = ({ setSidebarOpen, isNavbarOpen, setNavbarOpen }) => {
  const navItems = ["Music", "Podcast", "Live", "Radio"];

  return (
    <div className="h-16 bg-transparent flex items-center justify-between gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 lg:hidden cursor-pointer md:mr-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setSidebarOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <nav className="hidden md:block">
        <ul className="flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 max-w-xl">
        <div className="relative w-full md:w-3/4 ml-auto">
          <input
            type="text"
            defaultValue="Michel Jackson"
            className="w-full px-5 py-2 rounded-full bg-[#2C0000] text-white focus:outline-none font-medium"
          />
          <img
            src="/icons/search.png"
            alt="search"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            width={20}
          />
        </div>
      </div>
      {isNavbarOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setNavbarOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:hidden cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setNavbarOpen(true)}
        >
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      )}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isNavbarOpen ? "block" : "hidden"
        } absolute top-14 right-5 z-50 bg-white text-black font-medium w-48 p-4 rounded-lg shadow-lg`}
      >
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
