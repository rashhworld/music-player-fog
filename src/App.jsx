import React from "react";
import "./App.css";

const App = () => {
  const playing = 3;

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-[#0E0E0E] px-6 p-4 flex flex-col">
        <div className="flex items-center justify-center gap-2 mb-12">
          <img src="/images/logo.png" className="w-6" alt="logo" />
          <p className="font-medium text-2xl">
            <span className="text-[#FF5656]">Dream</span>Music
          </p>
        </div>
        <nav className="flex-1">
          <span className="text-sm font-medium">MENU</span>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center space-x-4 cursor-pointer">
              <img src="/icons/home.png" className="w-6" alt="home" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer">
              <img src="/icons/trends.png" className="w-6" alt="trends" />
              <span>Trends</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer">
              <img src="/icons/library.png" className="w-6" alt="library" />
              <span>Library</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer">
              <img src="/icons/discover.png" className="w-6" alt="discover" />
              <span>Discover</span>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pb-5">
          <span className="text-sm font-medium">GENERAL</span>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center space-x-3 cursor-pointer">
              <img src="/icons/settings.png" className="w-6" alt="settings" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer">
              <img src="/icons/logout.png" className="w-6" alt="logout" />
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#490101] to-[#0A0909] px-4">
        <div className="h-16 bg-transparent flex items-center justify-between px-10">
          <nav>
            <ul className="flex space-x-8 font-medium">
              <li className="cursor-pointer">Music</li>
              <li className="cursor-pointer">Podcast</li>
              <li className="cursor-pointer">Live</li>
              <li className="cursor-pointer">Radio</li>
            </ul>
          </nav>
          <div className="flex-1 max-w-xl">
            <div className="relative w-3/4 ml-auto">
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
        </div>
        <div className="flex-1 overflow-y-auto p-10">
          <div className="mb-10">
            <img src="/images/artist.png" alt="banner" className="w-full" />
          </div>
          <table className="w-full text-sm border-separate border-spacing-y-3">
            <thead>
              <tr className="font-medium text-left text-gray-200">
                <th className="px-4">#</th>
                <th className="px-4 ">TITLE</th>
                <th className="px-4 ">PLAYING</th>
                <th className="px-4 ">TIME</th>
                <th className="px-4 text-right">ALBUM</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  key={item}
                  className={`text-gray-200 hover:bg-[#520000] cursor-pointer ${
                    item === playing ? "bg-[#520000]" : ""
                  }`}
                >
                  <td className="p-4 py-2">
                    {item === playing ? (
                      <img src="/icons/playing.png" className="w-8"></img>
                    ) : (
                      item
                    )}
                  </td>
                  <td className="p-4 py-2 max-w-[250px]">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded mr-4 shrink-0">
                        <img
                          src="/images/avatar.png"
                          alt="song"
                          className="w-full h-full rounded"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate">
                          This is my song title {item}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 py-2 ">27.60.140.135</td>
                  <td className="p-4 py-2 ">5:30</td>
                  <td className="p-4 py-2 text-right max-w-[150px]">
                    <div className="truncate">
                      Album Name That Might Be Really Long
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col justify-end w-96 bg-gradient-to-b from-[#260909] to-[#0D0C0C] p-8">
        <div className="flex flex-col rounded-xl p-6 bg-[#6B0000]">
          <h2 className="text-center font-medium mb-4">Now Playing</h2>
          <div className="h-32 bg-gray-700 rounded-lg mb-6">
            <img
              src="/images/playing.png"
              className="w-full h-full object-cover rounded-xl"
              alt="playing"
            />
          </div>
          <div className="mb-6 text-center">
            <h3 className="font-medium">Current Song Title</h3>
            <p className="text-sm text-gray-200">Artist Name</p>
          </div>
          <div className="flex justify-between items-center gap-3 h-1 mb-8">
            <p>1:23</p>
            <div className="w-full bg-purple-500 h-1 rounded-full"></div>
            <p>3:45</p>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <img src="/icons/loop.png" alt="repeat" />
            <img src="/icons/prev.png" alt="previous" />
            <img
              src="/icons/play.png"
              className="p-2 bg-[#480000] rounded-lg"
              alt="play"
            />
            <img src="/icons/next.png" alt="next" />
            <img src="/icons/shuffle.png" alt="shuffle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
