import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import PokeList from "./components/pokeList/PokeList";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function PokeData(props) {
  const { data: data2, status } = useQuery(["t2"], () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1154`);
  });
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
  return <PokeList result={data2.data.results} search={props.result} />;
}
