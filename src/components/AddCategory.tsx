import React, { useState } from "react";

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
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Write a tex ..."
      />
      <button type="submit"> Search</button>
    </form>
  );
};
