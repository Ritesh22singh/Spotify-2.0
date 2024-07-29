import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(false);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  //   play: Plays the current track and updates the play status.
  // pause: Pauses the current track and updates the play status.
  // playWithId: Plays a track based on its ID and updates the track and play status.
  // previous: Plays the previous track if there is one and updates the track and play status.
  // next: Plays the next track if there is one and updates the track and play status.
  // seekSong: Adjusts the current playback time based on where the user clicked on the seek bar.

  useEffect(() => {
    const updateAudioTime = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        setTime({
          currentTime: {
            second: Math.floor(currentTime % 60),
            minute: Math.floor(currentTime / 60),
          },
          totalTime: {
            second: Math.floor(duration % 60),
            minute: Math.floor(duration / 60),
          },
        });

        // Update the width of the seek bar
        if (seekBar.current) {
          seekBar.current.style.width = (currentTime / duration) * 100 + "%";
        }
      }
    };

    if (audioRef.current) {
      audioRef.current.ontimeupdate = updateAudioTime;

      // updateAudioTime: Updates the current time and total duration of the track, and adjusts the width of the seek bar based on the playback progress.
      // useEffect: Sets up the ontimeupdate event listener on the audio element to call updateAudioTime whenever the current playback time changes. Cleans up the event listener when the component unmounts.
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, [audioRef, setTime]);

  // seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)) + '%' ;

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,

    //contextValue: An object containing all the state and functions related to the player, which will be provided to the consuming components.
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>

    //PlayerContext.Provider: Provides the context value to all the children components that are wrapped by PlayerContextProvider.
  );
};

export default PlayerContextProvider;

// What is useContext hook and need?

// Ans: Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

// Summary:

// The PlayerContextProvider component sets up a context for managing the state and behavior of a music player. It includes:

// State for the current track, play status, and time.
// Refs for the audio element and seek bar.
// Functions for controlling playback, seeking, and navigating between tracks.
// An effect to update the playback time and seek bar width.
// A context provider that makes the state and functions available to the rest of the application.
// This setup allows any component wrapped by PlayerContextProvider to access and manipulate the player state and controls through the context.
