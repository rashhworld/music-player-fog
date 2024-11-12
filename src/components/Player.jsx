import React from "react";
import { formatTime } from "../utils/formatTime";

const Player = ({
  songData,
  isPlaying,
  currentTime,
  duration,
  updateProgress,
  nextSong,
  prevSong,
  onPlayPause,
  isShuffled,
  setIsShuffled,
  isLooping,
  setIsLooping,
}) => {
  return (
    <div className="fixed xl:static bottom-0 w-full lg:w-[calc(100vw-16rem)] xl:w-96 flex flex-col justify-end bg-gradient-to-b from-[#260909] to-[#0D0C0C] lg:ml-64 xl:ml-0 xl:p-8">
      <div className="flex items-center justify-center sm:justify-between xl:items-stretch gap-6 xl:flex-col xl:rounded-xl bg-[#6B0000] p-4 px-6">
        <div className="hidden sm:flex items-center xl:flex-col xl:items-stretch gap-4 order-1">
          <h2 className="hidden xl:block text-center font-medium">
            Now Playing
          </h2>
          <div className="h-12 w-12 xl:h-full xl:w-full rounded-lg">
            <img
              src={songData?.image || "/images/artist.png"}
              className="w-full h-full object-cover rounded-xl"
              alt="playing"
            />
          </div>
          <div className="xl:text-center">
            <h3 className="font-medium">
              {songData?.title || "Select a song"}
            </h3>
            <p className="text-sm text-gray-200">
              {songData?.album || "No album"}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 order-2 xl:order-3">
          <img
            src="/icons/loop.png"
            onClick={() => setIsLooping(!isLooping)}
            className={`cursor-pointer h-5 w-5 ${
              isLooping ? "opacity-50" : ""
            }`}
            alt="repeat"
          />
          <img
            src="/icons/prev.png"
            className="cursor-pointer h-5 w-5"
            onClick={prevSong}
            alt="previous"
          />
          <img
            src={`/icons/${isPlaying ? "pause" : "play"}.png`}
            className="p-2 bg-[#480000] rounded-lg h-10 cursor-pointer"
            onClick={onPlayPause}
            alt="playPause"
          />
          <img
            src="/icons/next.png"
            className="cursor-pointer h-5 w-5"
            onClick={nextSong}
            alt="next"
          />
          <img
            src="/icons/shuffle.png"
            className={`cursor-pointer h-5 w-5 ${
              isShuffled ? "opacity-50" : ""
            }`}
            onClick={() => setIsShuffled(!isShuffled)}
            alt="shuffle"
          />
        </div>
        <div className="hidden md:flex justify-between items-center gap-3 order-3 xl:order-2">
          <span className="w-12 text-center">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime || 0}
            onChange={updateProgress}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#CA0000]"
            style={{
              background: `linear-gradient(to right, #CA0000 ${
                (currentTime / duration) * 100 || 0
              }%, #4B4B4B ${(currentTime / duration) * 100 || 0}%)`,
            }}
          />
          <span className="w-12 text-center">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
