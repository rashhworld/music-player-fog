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

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [allSongDurations, setAllSongDurations] = useState({});
  const [songSequence, setSongSequence] = useState([
    ...Array(songs.length).keys(),
  ]);

  const playSong = (songId, shouldPlay = true) => {
    if (sound) sound.stop();

    var newSound = new Howl({
      src: [songs[songId].url],
      html5: true,
      onload: () => setDuration(newSound.duration()),
      onplay: () => setDuration(newSound.duration()),
    });

    setSound(newSound);
    setCurrentSongIndex(songId);

    if (shouldPlay) {
      setIsPlaying(true);
      newSound.play();
    } else {
      setIsPlaying(false);
    }
  };

  const onPlayPause = () => {
    if (sound) {
      isPlaying ? sound.pause() : sound.play();
      setIsPlaying(!isPlaying);
    } else {
      playSong(currentSongIndex);
    }
  };

  const nextSong = () => {
    const currentIndex = songSequence.indexOf(currentSongIndex);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSongIndex(songSequence[nextIndex]);
    playSong(songSequence[nextIndex]);
  };

  const prevSong = () => {
    const currentIndex = songSequence.indexOf(currentSongIndex);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(songSequence[prevIndex]);
    playSong(songSequence[prevIndex]);
  };

  const shuffleSequence = () => {
    let newSequence = [...songSequence];
    const currentIndex = songSequence.indexOf(currentSongIndex);

    newSequence.splice(currentIndex, 1);

    for (let i = newSequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newSequence[i], newSequence[j]] = [newSequence[j], newSequence[i]];
    }

    newSequence.unshift(currentSongIndex);

    setSongSequence(newSequence);
    setIsShuffled(!isShuffled);
  };

  const updateProgress = (e) => {
    const progressBar = e.target;
    const newTime = parseFloat(progressBar.value);

    if (sound && !isNaN(newTime)) {
      sound.seek(newTime);
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    playSong(0, false);
  }, []);

  useEffect(() => {
    songs.forEach((song, index) => {
      const tempSound = new Howl({
        src: [song.url],
        html5: true,
        onload: () => {
          setAllSongDurations((prev) => ({
            ...prev,
            [index]: tempSound.duration(),
          }));
        },
      });
    });
  }, []);

  useEffect(() => {
    if (sound) {
      setDuration(sound.duration());

      sound.on("end", () => {
        if (isLooping) {
          sound.play();
        } else {
          const currentIndex = songSequence.indexOf(currentSongIndex);
          const nextIndex = (currentIndex + 1) % songs.length;
          playSong(songSequence[nextIndex]);
        }
      });

      const interval = setInterval(() => {
        if (sound.playing()) setCurrentTime(sound.seek());
      }, 100);

      return () => {
        clearInterval(interval);
        sound.off("end");
      };
    }
  }, [sound, isLooping, isShuffled, currentSongIndex]);

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
          songDurations={allSongDurations}
          onSongClick={playSong}
          songSequence={songSequence}
          setSongSequence={setSongSequence}
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
        setIsShuffled={shuffleSequence}
        isLooping={isLooping}
        setIsLooping={setIsLooping}
      />
    </div>
  );
};

export default App;
