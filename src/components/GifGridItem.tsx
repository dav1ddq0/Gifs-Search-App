import React from "react";

interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {
  return (
    <div className="animate__animated animate__pulse">
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  );
};
