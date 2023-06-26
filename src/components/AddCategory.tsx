import React, { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((prevState) => [inputValue, ...prevState]);
      setInputValue("");
    }
  };

  const handleCloseOnClick = () => {
    setInputValue("");
  };

  const ClearInput = (
    <button type="button" onClick={handleCloseOnClick}>
      <CloseIcon width={20} height={20} />
    </button>
  );
  return (
    <form className="search" onSubmit={handelSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Enter a name to search for GIFs"
      />
      {inputValue && ClearInput}

      <span className="close-icon"></span>
      <button type="submit"> Search</button>
    </form>
  );
};
