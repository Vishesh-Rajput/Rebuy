import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Button, ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#405138",
            colorPrimaryHover: "#47c60c",
            borderRadius: "0px",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
