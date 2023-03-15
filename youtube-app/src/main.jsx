import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root"); // selecting root element, where our app is going to render
const root = ReactDOM.createRoot(el); // creating root , and passing element

root.render(<App />);
