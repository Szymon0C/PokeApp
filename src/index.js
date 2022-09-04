import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { IndexProvider } from "./contexts/IndexContext";
import { FavouritePokemonProvider } from "./contexts/FavouritePokemonsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexProvider>
      <FavouritePokemonProvider>
        <App />
      </FavouritePokemonProvider>
    </IndexProvider>
  </React.StrictMode>
);

reportWebVitals();
