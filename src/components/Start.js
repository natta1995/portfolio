import "./Start.css";
import { useRef, useState } from "react";

import VideoStart from "../Video/videoStart.mp4";

const Start = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleVideoClickMuted = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

const handleVideoClickPaused = () => {
  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }
}

  return (
    <div className="start-first-div">
      <div className="start-section">
        <h1>Hello and welcome to my portfolio!</h1>
        <h2>Natalie Hällerdal</h2>
      </div>

      {/* <div className="video-container"> */}
        {/* <video
          ref={videoRef}
          className="intro-video"
          src={VideoStart}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        /> */}

        {/* <div className="video-controls">
          <button className="video-button" onClick={handleVideoClickMuted}>
            {isMuted ? "🔇" : "🔊"}
          </button>
          <button className="video-button" onClick={handleVideoClickPaused}>
            {isPaused ? "▶️" : "⏸️"}
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Start;
