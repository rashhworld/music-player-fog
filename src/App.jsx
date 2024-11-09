import React, { useEffect, useState } from "react";
import "./App.css";
import { Howl } from "howler";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Player from "./components/Player";

import songs from "./songs.json";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (sound) {
      setDuration(sound.duration());

      const interval = setInterval(() => {
        if (sound.playing()) setCurrentTime(sound.seek());
      }, 100);

      return () => clearInterval(interval);
    }
  }, [sound]);

  const playSong = (songId) => {
    if (sound) sound.stop();
    var newSound = new Howl({
      src: [songs[songId].url],
      html5: true,
      loop: isLooping,
      onload: () => setDuration(newSound.duration()),
      onplay: () => setDuration(newSound.duration()),
      onend: () => (isShuffled ? onShuffle() : nextSong()),
    });

    setSound(newSound);
    setCurrentSongIndex(songId);
    setIsPlaying(true);

    newSound.play();
  };

  const updateProgress = (e) => {
    const progressBar = e.target;
    const newTime = (progressBar.value / 100) * duration;
    sound.seek(newTime);
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    playSong(nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    playSong(prevIndex);
  };

  const onPlayPause = () => {
    isPlaying ? sound.pause() : sound.play();
    setIsPlaying(!isPlaying);
  };

  const onShuffle = () => {
    const shuffledIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(shuffledIndex);
    playSong(shuffledIndex);
    setIsShuffled(!isShuffled);
  };

  const onLoop = () => {
    playSong(currentSongIndex);
    setIsLooping(!isLooping);
  };

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
        <Content
          songs={songs}
          currentSong={currentSongIndex}
          onSongClick={playSong}
        />
      </div>
      <Player
        songData={songs[currentSongIndex]}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        updateProgress={updateProgress}
        nextSong={nextSong}
        prevSong={prevSong}
        onPlayPause={onPlayPause}
        isShuffled={isShuffled}
        onShuffle={onShuffle}
        isLooping={isLooping}
        onLoop={onLoop}
      />
    </div>
  );
};

export default App;
