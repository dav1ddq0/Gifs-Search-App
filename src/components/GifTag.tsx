import React, { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";

interface GifTagProps {
  category: string;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  handleNextItem: (newCurrent: string) => void;
}
export const GifTag = ({
  category,
  setCategories,
  setCurrentCategory,
  handleNextItem,
}: GifTagProps) => {
  const handleOnClickClose = () => {
    setCategories((categories) => {
      const newCategories = categories.filter((item) => item !== category);
      handleNextItem(newCategories.length > 0 ? newCategories[0] : "");
      return newCategories;
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const CloseCategory = (
    <button
      type="button"
      onClick={handleOnClickClose}
      title="remove category"
      id="close-category-button"
    >
      <CloseIcon width={14} height={14} />
    </button>
  );

  return (
    <div
      className="tag  animate__animated animate__wobble"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && CloseCategory}
      <button
        className="tag"
        type="button"
        onClick={() => {
          setCurrentCategory(category);
        }}
        id="category-button"
        title="select category"
        style={{ height: "100%" }}
      >
        {category}
      </button>
    </div>
  );
};
