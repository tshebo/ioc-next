import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const LightboxGallery = () => {
  const images = [
    "/gallery/ioc (1).webp",
    "/gallery/ioc (2).webp",
    "/gallery/ioc (3).webp",
    "/gallery/ioc (4).webp",
    "/gallery/ioc (5).webp",
    "/gallery/ioc (6).webp",
    "/gallery/ioc (7).webp",
    "/gallery/ioc (8).webp",
    "/gallery/ioc (9).webp",
    "/gallery/ioc (10).webp",
    "/gallery/ioc (11).webp",
    "/gallery/ioc (12).webp",
    "/gallery/ioc (13).webp",
    "/gallery/ioc (14).webp",
    "/gallery/ioc (15).webp",
    "/gallery/ioc (16).webp",
    "/gallery/ioc (17).webp",
    "/gallery/ioc (18).webp",
    "/gallery/ioc (19).webp",
    "/gallery/ioc (20).webp",
    "/gallery/ioc (21).webp",
    "/gallery/ioc (22).webp",
    "/gallery/ioc (23).webp",
    "/gallery/ioc (24).webp",
    "/gallery/ioc (25).webp",
    "/gallery/ioc (26).webp",
    "/gallery/ioc (27).webp",
    "/gallery/ioc (28).webp",
    "/gallery/ioc (29).webp",
    "/gallery/ioc (30).webp",
    "/gallery/ioc (31).webp",
    "/gallery/ioc (32).webp",
    "/gallery/ioc (33).webp",
    "/gallery/ioc (34).webp",
    "/gallery/ioc (35).webp",
    "/gallery/ioc (36).webp",
    "/gallery/ioc (37).webp",
    "/gallery/ioc (38).webp",
    "/gallery/ioc (39).webp",
    "/gallery/ioc (40).webp",
    "/gallery/ioc (41).webp",
    "/gallery/ioc (42).webp",
  ];

  return (
    <SlideshowLightbox className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
      {images.map((src, index) => (
        <img
          key={index}
          className="w-full h-48 object-cover rounded"
          src={src}
          alt={`Image ${index + 1}`}
        />
      ))}
    </SlideshowLightbox>
  );
};

export default LightboxGallery;
