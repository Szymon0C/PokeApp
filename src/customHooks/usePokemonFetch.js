export default function usePokemonFetch(allResult, newPokemons, page) {
  const currentPokemons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let restCheck = 0;
  const allPages = Math.ceil(allResult / 15);
  const rest = allResult - (allPages - 1) * 15;

  const result = currentPokemons
    .map((i) => {
      return i + 15 * page;
    })
    .filter((i) => {
      if (page === allPages - 1) {
        restCheck++;
        return restCheck <= rest;
      } else if (page > allPages - 1) {
        return;
      }
      return true;
    });

  return { result };
}
