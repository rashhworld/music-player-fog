import React from "react";
import { ReactSortable } from "react-sortablejs";
import { formatTime } from "../utils/formatTime";

const Content = ({
  songs,
  currentSong,
  songDurations,
  onSongClick,
  songSequence,
  setSongSequence,
}) => {
  const displaySongs = songSequence.map((index) => ({
    ...songs[index],
    originalIndex: index,
    id: index,
  }));

  const handleSort = (newState) => {
    const newSequence = newState.map((item) => item.originalIndex);
    setSongSequence(newSequence);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-24 xl:pb-10">
      <div className="mb-10">
        <img src="/images/artist.png" alt="banner" className="w-full" />
      </div>
      <p className="flex justify-between items-center px-4 mb-4">
        <span className="font-medium">Popular</span>
        <span className="text-gray-200">See All</span>
      </p>
      <table className="w-full text-sm border-separate border-spacing-y-3">
        <thead>
          <tr className="font-medium text-left text-gray-200">
            <th></th>
            <th className="px-4 hidden sm:table-cell">#</th>
            <th className="px-4">TITLE</th>
            <th className="px-4 hidden md:table-cell">PLAYING</th>
            <th className="px-4">TIME</th>
            <th className="px-4 hidden md:table-cell text-right">ALBUM</th>
          </tr>
        </thead>
        <ReactSortable
          tag="tbody"
          list={displaySongs}
          setList={handleSort}
          animation={200}
          delay={100}
          delayOnTouchOnly={true}
        >
          {displaySongs.map((item, index) => (
            <tr
              key={item.id}
              className={`relative text-gray-200 hover:bg-[#520000] cursor-pointer ${
                item.originalIndex === currentSong ? "bg-[#520000]" : ""
              }`}
              onClick={() => onSongClick(item.originalIndex)}
            >
              {item.originalIndex === currentSong ? (
                <td>
                  <div className="h-16 bg-[#CA0000] w-1"></div>
                </td>
              ) : (
                <td>
                  <div className="h-16 w-1"></div>
                </td>
              )}
              <td className="p-4 hidden sm:table-cell py-2">
                {item.originalIndex === currentSong ? (
                  <img src="/icons/playing.png" className="w-7" />
                ) : (
                  index + 1
                )}
              </td>
              <td className="px-4 py-2 max-w-[250px]">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded object-cover shrink-0"
                  />
                  <span className="truncate">{item.title}</span>
                </div>
              </td>
              <td className="px-4 hidden md:table-cell">{item.playId}</td>
              <td className="p-4 py-2">
                {songDurations[index]
                  ? formatTime(songDurations[index])
                  : "--:--"}
              </td>
              <td className="px-4 hidden md:table-cell text-right">
                {item.album}
              </td>
            </tr>
          ))}
        </ReactSortable>
      </table>
    </div>
  );
};

export default Content;
