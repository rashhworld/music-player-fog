import React from "react";

const Player = () => {
  return (
    <div className="fixed xl:static bottom-0 w-full lg:w-[calc(100vw-16rem)] xl:w-96 flex flex-col justify-end bg-gradient-to-b from-[#260909] to-[#0D0C0C] lg:ml-64 xl:ml-0 xl:p-8">
      <div className="flex items-center justify-center sm:justify-between xl:items-stretch gap-6 xl:flex-col xl:rounded-xl bg-[#6B0000] p-4 px-6">
        <div className="hidden sm:flex items-center xl:flex-col xl:items-stretch gap-4 order-1">
          <h2 className="hidden xl:block text-center font-medium">
            Now Playing
          </h2>
          <div className="h-12 w-12 xl:h-32 xl:w-full bg-gray-700 rounded-lg">
            <img
              src="/images/playing.png"
              className="w-full h-full object-cover rounded-xl"
              alt="playing"
            />
          </div>
          <div className="xl:text-center">
            <h3 className="font-medium">Current Song Title</h3>
            <p className="text-sm text-gray-200">Artist Name</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 order-2 xl:order-3">
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
        <div className="hidden md:flex justify-between items-center gap-3 h-1 order-3 xl:order-2">
          <p>1:23</p>
          <div className="w-32 xl:w-full bg-purple-500 h-1 rounded-full"></div>
          <p>3:45</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
