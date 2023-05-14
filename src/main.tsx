import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import "./global.scss";
import { queryClient } from "./lib/react-query";
import { store } from "./redux";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root") as HTMLDivElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
