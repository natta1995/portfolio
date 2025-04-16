import "./Start.css";
import { useRef, useState } from "react";

import VideoStart from "../Video/videoStart.mp4";

const Start = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="start-first-div">
      <div className="start-section">
        <h1>Hej och välkommen till min portfolio!</h1>
        <h2>Natalie Hällerdal</h2>
      </div>

      <div className="video-container">
        <video
          ref={videoRef}
          className="intro-video"
          src={VideoStart}
          autoPlay
          loop
          muted={isMuted}
          playsInline
         
        />
        <b className="button" onClick={handleVideoClick}>
          {isMuted
            ? "🔇"
            : "🔊"}
        </b>
      </div>
    </div>
  );
};

export default Start;
