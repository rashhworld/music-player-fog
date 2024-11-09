import React from "react";
import { formatTime } from "../utils/formatTime";

const Content = ({ songs, currentSong, onSongClick }) => {
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
          {songs.map((item, index) => (
            <tr
              key={index}
              className={`relative text-gray-200 hover:bg-[#520000] cursor-pointer ${
                index === currentSong ? "bg-[#520000]" : ""
              }`}
              onClick={() => onSongClick(index)}
            >
              {index === currentSong ? (
                <td className="hidden sm:table-cell">
                  <div className="h-16 bg-[#CA0000] w-1"></div>
                </td>
              ) : (
                <td className="hidden sm:table-cell"></td>
              )}
              <td className="p-4 hidden sm:table-cell py-2">
                {index === currentSong ? (
                  <img src="/icons/playing.png" className="w-8" />
                ) : (
                  index + 1
                )}
              </td>
              <td className="p-4 py-2 max-w-[250px]">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded mr-4 shrink-0">
                    <img
                      src={item.image}
                      alt="song"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate">{item.title}</h3>
                  </div>
                </div>
              </td>
              <td className="p-4 py-2 hidden md:table-cell">{item.playId}</td>
              <td className="p-4 py-2">{formatTime(item.duration)}</td>
              <td className="p-4 py-2 hidden md:table-cell text-right max-w-[150px]">
                <div className="truncate">{item.album}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
