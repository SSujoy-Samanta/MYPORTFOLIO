import React from "react";

const images = [
  'c.svg',
  'python.svg',
  'java.svg',
  'cplus.svg',
  'postgress.svg',
  'mongo.svg',
  "ts.svg",
  "js.svg",
  "nextjs.svg",
  "react.svg",
  'github.svg',
  'docker.svg',
  'aws.svg',
  'cricket.svg'
  // Add as many images as needed
];

export default function ImageSlider() {
  return (
    <div className="slider">
      <div className="slider-track flex justify-evenly items-center ">
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img
            src={src}
            alt={`slide-${index}`}
            style={{ width: "70px", height: "70px" }}
            className="slider-image aspect-auto object-contain mix-blend-darken border border-cyan-600 p-1 rounded-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
