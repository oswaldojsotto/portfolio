import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App"));
import Loader from "./Components/Loader";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
