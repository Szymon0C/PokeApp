import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export default function Pokemon(prop) {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${prop.url}`;
  const { status, data } = useQuery([`pokemon${prop.url}`], () => {
    return axios.get(BASE_URL);
  });
  console.log(data);
  const pokemon = data?.data;
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }
  if (status === "error") {
    return <h2>Error!</h2>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
    </div>
  );
}
