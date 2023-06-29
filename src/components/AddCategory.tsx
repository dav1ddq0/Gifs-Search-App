import React, { useState } from "react";
import { CloseIcon, SearchIcon } from "../icons";
import "./AddCategory.css";
interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const AddCategory = ({
  setCategories,
  setCurrentCategory,
}: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((prevState) => [inputValue, ...prevState]);
      setInputValue("");
      setCurrentCategory(inputValue);
    }
  };

  const handleCloseOnClick = () => {
    setInputValue("");
  };

  const ClearInput = (
    <button type="button" title="clear" onClick={handleCloseOnClick}>
      <CloseIcon width={30} height={30} />
    </button>
  );
  return (
    <form className="search" onSubmit={handelSubmit}>
      <div className="text-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Enter a name to search for GIFs"
        />
        {inputValue && ClearInput}
      </div>

      <button type="submit" title="Search">
        {" "}
        <SearchIcon width={30} height={30} />
      </button>
    </form>
  );
};
