import React from "react";
import ReactDOM from "react-dom";
import "./util/reset.css";
import App from "./page/app";
import "./util/rem";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept(["./page/app"], () => {
    let App = require("./page/app").default;
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
