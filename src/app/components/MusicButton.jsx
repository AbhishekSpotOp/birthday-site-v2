"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, Pause } from "lucide-react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    } catch (err) {
      console.error("Audio blocked:", err);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <audio ref={audioRef} src="/song.mp3" preload="auto" playsInline />

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 2147483647,
          pointerEvents: "auto",
        }}
        className="h-14 w-14 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg flex items-center justify-center"
        aria-label="Toggle music"
      >
        {playing ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </>,
    document.body
  );
}
