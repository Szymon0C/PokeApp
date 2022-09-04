import { useState } from "react";
export default function useDraw() {
  const [winner, setWinner] = useState(true);
  const num = Math.random;
  if (num > 0.5) {
    setWinner(false);
  }
  return { winner };
}
