import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
//ts에서 오류 발생해서 ! 추가함.
//https://velog.io/@leemin/TS-TypeScript-HTMLElement

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
