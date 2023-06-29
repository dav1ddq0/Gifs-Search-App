import React from "react";

interface FooterProps {
  setPagination: React.Dispatch<
    React.SetStateAction<{
      count: number;
      offset: number;
      limit: number;
    }>
  >;
  offset: number;
  limit: number;
  count: number;
}
export const Footer = ({
  setPagination,
  offset,
  count,
  limit,
}: FooterProps) => {
  console.log(offset);

  return (
    <div>
      <button
        onClick={() => {
          if (offset - limit >= 0) {
            setPagination({
              count: count,
              offset: offset - limit,
              limit: limit,
            });
          }
        }}
      >
        Left
      </button>
      <p> Count:{count}</p>
      <p>Page {Math.floor(offset / limit) + 1}</p>
      <button
        onClick={() => {
          if (offset + limit < count) {
            setPagination({
              count: count,
              limit: limit,
              offset: offset + limit,
            });
          }
        }}
      >
        Right
      </button>
    </div>
  );
};
