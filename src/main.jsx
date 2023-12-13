import ReactDOM from "react-dom/client";
import { Layout } from "antd";
import App from "./App.jsx";
import "./index.css";

import store from "./store.js";
import { Provider } from "react-redux";

const { Header, Content } = Layout;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Layout style={{ background: "transparent" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#FFF" }}>Webcam Toy</div>
      </Header>
      <Content style={{ padding: "0 48px", height: "100%" }}>
        <App />
      </Content>
    </Layout>
  </Provider>
);
