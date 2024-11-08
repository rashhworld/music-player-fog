import React from "react";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Home", icon: "/icons/home.png" },
    { name: "Trends", icon: "/icons/trends.png" },
    { name: "Library", icon: "/icons/library.png" },
    { name: "Discover", icon: "/icons/discover.png" },
    { name: "Settings", icon: "/icons/settings.png" },
    { name: "Log Out", icon: "/icons/logout.png" },
  ];

  return (
    <div
      className={`fixed inset-0 h-screen z-50 transform transition-transform duration-300 lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static flex flex-col w-64 bg-[#0E0E0E] px-6 p-4`}
    >
      <div className="relative flex items-center justify-between gap-2 mb-12">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" className="w-6" alt="logo" />
          <p className="font-medium text-xl lg:text-2xl">
            <span className="text-[#FF5656]">Dream</span>Music
          </p>
        </div>
        <button
          className="absolute -top-1 -right-5 text-white lg:hidden p-2"
          onClick={() => setSidebarOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="flex-1">
        <span className="text-sm font-medium">MENU</span>
        <ul className="space-y-4 mt-4">
          {menuItems.slice(0, 4).map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <img src={item.icon} className="w-6" alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pb-5">
        <span className="text-sm font-medium">GENERAL</span>
        <ul className="space-y-4 mt-4">
          {menuItems.slice(4).map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <img src={item.icon} className="w-6" alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
