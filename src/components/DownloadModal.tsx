import React, { useState } from "react";
import { GifIcon, ArrowDownloadIcon } from "../icons";

import "./DownloadModal.css";

interface DownloadModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  url: string;
}

export const DownloadModal = ({
  setIsOpen,
  title,
  url,
}: DownloadModalProps) => {
  const [filename, setFilename] = useState(title);
  console.log(title);
  console.log(url);

  const handleDownloadImage = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${filename}.gif`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };
  return (
    <div className="darkBG">
      {/* <p>{title} GIF</p> */}
      <div className="modal-form animate__animated animate__backInDown">
        <h1> Download </h1>
        <h2>{title}</h2>
        <div className="modal-save-as">
          <p> Save as: </p>

          <input
            type="text"
            placeholder="filename"
            value={filename}
            onChange={(event) => {
              setFilename(event.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            handleDownloadImage();
            setIsOpen(false);
          }}
        >
          <ArrowDownloadIcon width={20} height={20} />
          <GifIcon width={30} height={30} />
        </button>
      </div>
    </div>
  );
};
