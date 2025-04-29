import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import "./Style/cd-wordwrapper.css";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store.jsx";
import "./Style/Loader.css"
// const Layout = lazy(() => import("./Components/Layout.jsx"))
import 'aos/dist/aos.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>


        <Layout />

      </Provider>
    </StrictMode>
  </BrowserRouter>
);
