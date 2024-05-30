import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { AppProvider } from "./context/directorycontext";
import { TraderProvider } from "./context/tradercontext";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={baseUrl}>
    <ScrollToTop />
    <AppProvider>
      <TraderProvider>
        <App />
      </TraderProvider>
    </AppProvider>
  </BrowserRouter>
);

reportWebVitals();
