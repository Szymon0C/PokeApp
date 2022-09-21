export default function usePokemonFetch(newPokemons, page) {
  const currentPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const result = currentPokemons
    .map((i) => {
      return i + 15 * page - newPokemons;
    })
    .filter((i) => {
      return i > 0;
    });

  return { result };
}
