import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { GifTag } from "./components/GifTag";
import { Footer } from "./components/Footer";
const GifApp = () => {
  const [categories, setCategories] = useState<string[]>(() => {
    const localCategories = localStorage.getItem("categories");
    return localCategories ? JSON.parse(localCategories) : [];
  });
  const [currentCategory, setCurrentCategory] = useState(() => {
    const localCurrentCategory = localStorage.getItem("current");
    return localCurrentCategory ? JSON.parse(localCurrentCategory) : "";
  });

  const [pagination, setPagination] = useState({
    count: 0,
    offset: 0,
    limit: 8,
  });

  const { count, offset, limit } = pagination;

  const handleNextItem = (newCurrent: string) => {
    setCurrentCategory(newCurrent);
    if (newCurrent === "") {
      resetPagination();
    }
  };

  const resetPagination = () => {
    setPagination({
      count: 0,
      offset: 0,
      limit: 8,
    });
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

      {currentCategory && (
        <GifGrid
          category={currentCategory}
          offset={offset}
          limit={limit}
          setPagination={setPagination}
        />
      )}
      <Footer
        setPagination={setPagination}
        count={count}
        offset={offset}
        limit={limit}
      />
    </>
  );
};

export default GifApp;
