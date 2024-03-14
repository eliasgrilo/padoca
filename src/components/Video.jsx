import React, { useEffect, useRef } from 'react';

const Video = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        videoRef.current.src = "https://ik.imagekit.io/tsadb415v5/22.mp4?updatedAt=1709057231909";
      } else {
        videoRef.current.src = src;
      }
      videoRef.current.load();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [src]);

  return (
    <video ref={videoRef} playsInline loop muted autoPlay></video>
  );
};

export default Video;