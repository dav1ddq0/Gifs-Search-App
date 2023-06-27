import React from "react";
import "animate.css";
interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> {title}</p>
      <button>Download</button>
    </div>
  );
};
