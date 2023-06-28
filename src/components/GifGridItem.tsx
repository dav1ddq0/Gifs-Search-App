import React, { useState } from "react";
import "animate.css";
import { ArrowDownloadIcon } from "../icons";
import { DownloadModal } from "./DownloadModal";
interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="card animate__animated animate__bounce">
        <img src={url} alt={title} />
        <div className="card-info">
          <p> {title}</p>
          <button title="Download Gif" onClick={() => setIsOpen(true)}>
            <ArrowDownloadIcon width={30} height={30} />
          </button>
        </div>
      </div>
      {isOpen && (
        <DownloadModal setIsOpen={setIsOpen} url={url} title={title} />
      )}
    </>
  );
};
