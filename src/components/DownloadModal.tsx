import React, { useState } from "react";
import { GifIcon, ArrowDownloadIcon, CloseIcon } from "../icons";
import { downloadGifFile } from "../helpers/downloadGifFile";
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
    downloadGifFile(url, filename);
  };

  return (
    <div className="darkBG">
      <div className="modal-form animate__animated animate__backInDown">
        <div className="modal-main">
          <h1> Download </h1>
          <button
            title="Close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon width={30} height={30} />
          </button>
        </div>

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
          title="Get Gif File"
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
