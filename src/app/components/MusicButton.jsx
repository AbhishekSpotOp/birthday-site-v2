"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.volume = 0.6;
        await audio.play();
        setPlaying(true);
      }
    } catch (e) {
      console.log("Audio blocked:", e);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" preload="auto" playsInline />

      <button
        onClick={toggleMusic}
        style={{ pointerEvents: "auto" }}
        className="
          fixed bottom-6 right-6
          h-14 w-14 rounded-full
          bg-pink-500 hover:bg-pink-600
          text-white shadow-lg
          flex items-center justify-center
          z-[9999]
        "
        aria-label="Toggle music"
      >
        {playing ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </>
  );
}
