import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Rick and Morty"]);

  //   const handleAdd = () => {
  //     setCategories((prevState) => [...prevState, "VinlandSaga"]);
  //   };

  return (
    <>
      <div className="header">
        <h2>GifApp</h2>
      </div>

      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifApp;
