import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
//ts에서 오류 발생해서 ! 추가함.
//https://velog.io/@leemin/TS-TypeScript-HTMLElement

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
