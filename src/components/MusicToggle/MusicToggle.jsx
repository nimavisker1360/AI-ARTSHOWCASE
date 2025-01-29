import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "https://assets5.lottiefiles.com/packages/lf20_jJJl6i.json",
    });

    lottieRef.current = animation;

    audioRef.current = new Audio("/demoted.mp3");

    return () => {
      animation.destroy();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!isPlaying) {
      audioRef.current.play();
      lottieRef.current.playSegments([0, 120], true);
    } else {
      audioRef.current.pause();
      lottieRef.current.stop();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-toggle">
      <div className="music-toggle-btn" onClick={toggleMusic}>
        <div
          ref={containerRef}
          className="sound-bars"
          style={{ width: "20px", height: "20px" }}
        />
        <p>{isPlaying ? "on" : "off"}</p>
      </div>
    </div>
  );
};

export default MusicToggle;
