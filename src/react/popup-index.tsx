import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup/view/popup.js";
import GlobalStyle from "../font/global.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Popup />
    <GlobalStyle />
  </>
);
