import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup/view/popup";
import GlobalStyle from "../font/global";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Popup />
    <GlobalStyle />
  </>
);
