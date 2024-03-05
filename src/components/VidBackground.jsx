import React from "react";
import Video from "../assets/earth.mp4";

const VideoBackground = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        type="video/mp4"
      >
      </video>
    </div>
  );
};

export default VideoBackground;
