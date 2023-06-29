import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface GifGridProps {
  category: string;
  offset: number;
  limit: number;
  setPagination: React.Dispatch<
    React.SetStateAction<{
      count: number;
      offset: number;
      limit: number;
    }>
  >;
}

export const GifGrid = ({
  category,
  offset,
  limit,
  setPagination,
}: GifGridProps) => {
  const {
    loading,
    data: images,
    count,
  } = useFetchGifs(category, offset, limit);

  useEffect(() => {
    setPagination((pagination) => {
      return {
        ...pagination,
        count: count,
      };
    });
  }, [count, setPagination]);

  return (
    <>
      {loading && <p>Loading ... </p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
