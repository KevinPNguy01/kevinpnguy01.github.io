import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function ImageSlides({ imgs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const ref = useRef(null);
  const totalImages = imgs.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalImages - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const img = new Image();
    img.src = imgs[0];
    img.onload = () => {
      const height = img.height;
      const width = img.width;
      const aspectRatio = height / width;
      const actualWidth = ref.current.clientWidth;
      setWidth(actualWidth);
      setHeight(actualWidth * aspectRatio);
      setAspectRatio(aspectRatio);
    };
  }, [imgs]);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth } = entry.contentRect;
        if (newWidth > 0) {
          setWidth(newWidth);
          setHeight(newWidth * aspectRatio);
        }
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [aspectRatio]);

  useEffect(() => {
    for (let i = 0; i < imgs.length; i++) {
      const media = imgs[i];
      if (media.endsWith(".mp4")) {
        const videoElement = document.getElementById(`video-slide-${i}`);
        if (i === currentIndex) {
          videoElement.play();
        } else {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      }
    }
  }, [currentIndex]);

  return (
    <div
      ref={ref}
      className="overflow-hidden relative w-full flex items-center justify-center rounded-xl bg-black/20"
    >
      {imgs.map((media, index) =>
        !media.endsWith(".mp4") ? (
          <img
            className={`object-cover ${index === currentIndex ? "" : "hidden"}`}
            src={media}
            style={
              width > 0
                ? {
                    height: `${height}px`,
                    width: `${width}px`,
                  }
                : {}
            }
          />
        ) : (
          <video
            id={`video-slide-${index}`}
            className={`object-cover ${index === currentIndex ? "" : "hidden"}`}
            style={
              width > 0
                ? {
                    height: `${height}px`,
                    width: `${width}px`,
                  }
                : {}
            }
            controls
          >
            <source src={media} type="video/mp4" />
          </video>
        )
      )}
      <IconButton
        className={`${
          currentIndex === 0 ? "opacity-0" : ""
        } bg-neutral-500/20! backdrop-filter backdrop-blur-sm p-1! absolute! left-1 top-1/2 transform -translate-y-1/2`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        className={`${
          currentIndex === totalImages - 1 ? "opacity-0" : ""
        } bg-neutral-500/20! backdrop-filter backdrop-blur-sm p-1! absolute! right-1 top-1/2 transform -translate-y-1/2`}
        onClick={handleNext}
        disabled={currentIndex === totalImages - 1}
      >
        <NavigateNextIcon />
      </IconButton>
      <div className="flex gap-2 absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white font-semibold">
        {imgs.length > 1 &&
          Array.from({ length: totalImages }, (_, index) => (
            <span
              key={index}
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-neutral-400"
              } drop-shadow-[0_0px_1px_rgba(0,0,0,1)]`}
            ></span>
          ))}
      </div>
    </div>
  );
}
