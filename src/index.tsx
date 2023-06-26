import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GifApp from "./GifApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);
