import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root")!);
//ts에서 오류 발생해서 ! 추가함.
//https://velog.io/@leemin/TS-TypeScript-HTMLElement

root.render(
  //<React.StrictMode> //리스트에서 클릭시, 페이지 아동이 안되는 문제 때문에 없앰
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
  //</React.StrictMode>
);
