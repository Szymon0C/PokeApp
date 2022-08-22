import { useState } from "react";

import Pokemon from "./components/Pokemon";

export default function PokeList() {
  const [page, setPage] = useState(1);
  return (
    <>
      <Pokemon url={1} />
      <Pokemon url={2} />
      <Pokemon url={3} />
      <Pokemon url={4} />
    </>
  );
}
