import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./HomeSlide.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function HomeSlide() {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideImages = [
    {
      id: 0,
      name: "deck1",
      url:
        "https://whitespacechelsea.com/wp-content/uploads/WhiteSpaceChelsea-Corporate-Event-Space-10-full-size.jpg",
    },
    {
      id: 1,
      name: "deck2",
      url:
        "https://ctfassets.imgix.net/vh7r69kgcki3/t5yTfrI4Tg70QIfnarRzS/5b71dc73f19ab0bd43d82ce2c0384762/Web_150DPI-20191125_WeWork_Break_Room_LA_008.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    },
    {
      id: 2,
      name: "deck3",
      url: "https://eventective-media.azureedge.net/2166007_lg.jpg",
    },
  ];

  const imageIndex = wrap(0, slideImages.length, page);

  const paginate = (newDirection) => {
    const newIndex = page + newDirection;
    if (newIndex < 0 || newIndex >= slideImages.length) {
      return;
    }
    setPage([newIndex, newDirection]);
  };

  return (
    <AnimatePresence>
      <div className="home-slide-container">
        {slideImages.map((image, index) => (
          <motion.img
            className="home-slide-image"
            key={index}
            src={image.url}
            alt={image.name}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100vw", delay: 0 }}
            custom={direction}
            variants={variants}
          />
        ))}
      </div>

    </AnimatePresence>
  );
}
