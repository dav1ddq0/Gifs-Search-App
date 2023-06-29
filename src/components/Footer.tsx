import React, { useMemo } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import "./Footer.css";
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
  console.log(count);

  const totalPages = useMemo(() => {
    return Math.floor(count / limit) + (count % limit === 0 ? 0 : 1);
  }, [count, limit]);

  const currentPage = useMemo(() => {
    return Math.floor(offset / limit) + 1;
  }, [offset, limit]);
  console.log(offset);

  return (
    <div className="pagination">
      <p> {count} results</p>
      <button
        id={offset ? "" : "disabled"}
        type="button"
        title="Previous Page"
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
        <LeftArrowIcon width={30} height={30} />
      </button>

      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        id={offset + limit < count ? "" : "disabled"}
        type="button"
        title="Next Page"
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
        <RightArrowIcon width={30} height={30} />
      </button>
    </div>
  );
};
