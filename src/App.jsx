import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Player from "./components/Player";

const App = () => {
  const playing = 3;
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {(isSidebarOpen || isNavbarOpen) && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => {
            setSidebarOpen(false);
            setNavbarOpen(false);
          }}
        />
      )}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#490101] to-[#0A0909] px-4 md:px-10">
        <Navbar
          setSidebarOpen={setSidebarOpen}
          isNavbarOpen={isNavbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
        <Content playing={playing} />
      </div>
      <Player />
    </div>
  );
};

export default App;
