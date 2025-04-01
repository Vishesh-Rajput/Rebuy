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
            colorPrimaryHover: "#0a910a",
            borderRadius: "2px",
          },
        },
        token: {
          borderRadius: "2px",
          colorPrimary: "#405138",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
