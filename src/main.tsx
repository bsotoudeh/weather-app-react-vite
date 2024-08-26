// import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WrapperFont } from "./assets/style/styled"; // No need for .ts here
import Lato from "./font/Lato-Regular.ttf"; // Importing font file; this is generally okay
import App from "./App";
import "./index.css";

// Ensure that there is an element with id 'root' in your HTML file
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <WrapperFont>
        <App />
      </WrapperFont>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
