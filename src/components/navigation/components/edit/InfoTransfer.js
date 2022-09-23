import { useContext } from "react";

import { IndexContext } from "../../../../contexts/IndexContext";

import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PokemonEdit from "./component/PokemonEdit";

export default function InfoTransfer() {
  const { index } = useContext(IndexContext);
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}`;

  const { data, status } = useQuery([`edit${index}`], () => {
    if (index) {
      return axios.get(BASE_URL);
    }
  });
  const pokemon = data?.data;

  if (status === "loading") {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  if (status === "error") {
    return <h2>Error!</h2>;
  }

  return <PokemonEdit value={pokemon} />;
}
