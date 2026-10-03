import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Mainlayout from "./mainlayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mainlayout>
      <App />
    </Mainlayout>
  </StrictMode>,
);
