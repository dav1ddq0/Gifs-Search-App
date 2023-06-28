import React, { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { CloseIcon } from "../icons";
import { DownloadModal } from "./DownloadModal";
interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      {loading && <p>Loading ... </p>}
      <div className="card-grid">
        {images.map((img) => {
          return (
            <>
              <GifGridItem key={img.id} {...img} />
            </>
          );
        })}
      </div>
    </>
  );
};
