import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { init } from "emailjs-com";
const { REACT_APP_EMAILJS_USER_ID } = process.env;
init(REACT_APP_EMAILJS_USER_ID);
// const breakpoints = {
//   mobile: 320,
//   mobileLandscape: 480,
//   tablet: 768,
//   tabletLandscape: 1024,
//   desktop: 1200,
//   desktopLarge: 1500,
//   desktopWide: 1920,
// };
 

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
