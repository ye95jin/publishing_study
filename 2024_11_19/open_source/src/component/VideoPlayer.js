import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import videoData from "../videoData";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    gsap.to(".control", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setButtonVisible(false);
        video.play();
      },
    });
  };

  const handlePause = () => {
    const video = videoRef.current;

    if (!video.paused) {
      gsap.fromTo(
        ".control",
        { display: "block", opacity: 0 },
        {
          opacity: 0.8,
          duration: 0.3,
          onComplete: () => {
            setButtonVisible(true);
            video.pause();
          },
        }
      );
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      if (currentIndex < videoData.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setButtonVisible(true);
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentIndex]);

  return (
    <div className="container">
      <a
        href="#"
        className="control"
        onClick={(e) => {
          e.preventDefault();
          handlePlay();
        }}
        style={{
          opacity: buttonVisible ? 0.8 : 0,
          display: buttonVisible ? "block" : "none",
        }}
      >
        Play
      </a>
      <video
        id="my_video"
        ref={videoRef}
        src={videoData[currentIndex].src}
        onClick={handlePause}
        controls={false}
        style={{ width: "100%" }}
      ></video>
    </div>
  );
};

export default VideoPlayer;
