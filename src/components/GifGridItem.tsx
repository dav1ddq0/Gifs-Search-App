import React from "react";
import "animate.css";
import ArrowDownloadIcon from "../icons/ArrowDownload";
interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> {title}</p>
      <button title="Download Gif">
        <ArrowDownloadIcon width={30} height={30} />
      </button>
    </div>
  );
};
