import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { GifTag } from "./components/GifTag";

const GifApp = () => {
  const [categories, setCategories] = useState<string[]>(() => {
    const localCategories = localStorage.getItem("categories");
    return localCategories ? JSON.parse(localCategories) : [];
  });
  const [currentCategory, setCurrentCategory] = useState(() => {
    const localCurrentCategory = localStorage.getItem("current");
    return localCurrentCategory ? JSON.parse(localCurrentCategory) : "";
  });

  const handleNextItem = (newCurrent: string) => {
    setCurrentCategory(newCurrent);
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(currentCategory));
  }, [currentCategory]);

  return (
    <>
      <div className="header">
        <h2>GifApp</h2>
      </div>
      <AddCategory
        setCategories={setCategories}
        setCurrentCategory={setCurrentCategory}
      />

      <div className="tag-container">
        {categories.map((category) => {
          return (
            <GifTag
              key={category}
              category={category}
              setCategories={setCategories}
              setCurrentCategory={setCurrentCategory}
              handleNextItem={handleNextItem}
            />
          );
        })}
      </div>
      {currentCategory && <GifGrid category={currentCategory} />}
    </>
  );
};

export default GifApp;
