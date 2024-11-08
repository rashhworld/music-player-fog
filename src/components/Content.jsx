import React from "react";

const Content = ({ playing }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 xl:pb-10">
      <div className="mb-10">
        <img src="/images/artist.png" alt="banner" className="w-full" />
      </div>
      <table className="w-full text-sm border-separate border-spacing-y-3">
        <thead>
          <tr className="font-medium text-left text-gray-200">
            <th className="hidden sm:table-cell"></th>
            <th className="px-4 hidden sm:table-cell">#</th>
            <th className="px-4">TITLE</th>
            <th className="px-4 hidden md:table-cell">PLAYING</th>
            <th className="px-4">TIME</th>
            <th className="px-4 hidden md:table-cell text-right">ALBUM</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr
              key={item}
              className={`relative text-gray-200 hover:bg-[#520000] cursor-pointer ${
                item === playing ? "bg-[#520000]" : ""
              }`}
            >
              {item === playing ? (
                <td className="hidden sm:table-cell">
                  <div className="h-16 bg-[#CA0000] w-1"></div>
                </td>
              ) : (
                <td className="hidden sm:table-cell"></td>
              )}
              <td className="p-4 hidden sm:table-cell py-2">
                {item === playing ? (
                  <img src="/icons/playing.png" className="w-8" />
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
                    <h3 className="truncate">This is my song title {item}</h3>
                  </div>
                </div>
              </td>
              <td className="p-4 py-2 hidden md:table-cell">27.60.140.135</td>
              <td className="p-4 py-2">5:30</td>
              <td className="p-4 py-2 hidden md:table-cell text-right max-w-[150px]">
                <div className="truncate">
                  Album Name That Might Be Really Long
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
