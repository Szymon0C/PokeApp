import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "./contexts/ThemeContext";
import { IndexProvider } from "./contexts/IndexContext";
import { FavouritePokemonProvider } from "./contexts/FavouritePokemonsContext";
import { ArenaProvider } from "./contexts/ArenaContext";
import { UsersProvider } from "./contexts/UsersContext";
import { EditProvider } from "./contexts/EditContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UsersProvider>
        <IndexProvider>
          <EditProvider>
            <FavouritePokemonProvider>
              <ArenaProvider>
                <App />
              </ArenaProvider>
            </FavouritePokemonProvider>
          </EditProvider>
        </IndexProvider>
      </UsersProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
