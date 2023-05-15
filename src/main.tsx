import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.scss";
import { createMatchMedia } from "./hooks/useMatchMedia";
import { queryClient } from "./lib/react-query";
import { store } from "./redux";

const root = createRoot(document.querySelector("#root") as HTMLDivElement);

const styles = getComputedStyle(document.documentElement);
const tabletMinWidth = styles.getPropertyValue("--tablet-min-w");
export const [MatchTabletProvider, useMatchTablet] = createMatchMedia(
  `(min-width: ${tabletMinWidth})`
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MatchTabletProvider>
            <App />
          </MatchTabletProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
