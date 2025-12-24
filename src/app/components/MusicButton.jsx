"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop />

      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6
          h-14 w-14 rounded-full
          bg-pink-500 hover:bg-pink-600
          text-white shadow-lg
          flex items-center justify-center
          transition-all duration-300
          animate-pulse
        "
        aria-label="Toggle music"
      >
        {playing ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </>
  );
}
