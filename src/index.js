import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ArenaProvider } from "./contexts/ArenaContext";
import { EditProvider } from "./contexts/EditContext";
import { FavouritePokemonProvider } from "./contexts/FavouritePokemonsContext";
import { IndexProvider } from "./contexts/IndexContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UsersProvider } from "./contexts/UsersContext";
import reportWebVitals from "./reportWebVitals";

import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider maxSnack={3}>
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
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
