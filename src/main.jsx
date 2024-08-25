import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WrapperFont } from "./assets/style/styled.ts";
import Lato from "./font/Lato-Regular.ttf";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WrapperFont>
      <App />
    </WrapperFont>
  </StrictMode>
);
