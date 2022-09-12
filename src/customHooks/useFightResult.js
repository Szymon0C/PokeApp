import { useState, useEffect } from "react";

export default function useFightResult(index, win, lose) {
  const [winResult, setWinResult] = useState(0);
  const [loseResult, setLoseResult] = useState(0);

  useEffect(() => {
    const currentWinArr = win
      .filter((e) => {
        return typeof e === "number";
      })
      .filter((e) => {
        return e === index;
      })
      .map((e) => {
        return 1;
      });
    if (currentWinArr.length > 0) {
      setWinResult(
        currentWinArr.reduce((prev, curr) => {
          return prev + curr;
        })
      );
    } else {
      setWinResult(0);
    }

    const currentLoseArr = lose
      .filter((e) => {
        return typeof e === "number";
      })
      .filter((e) => {
        return e === index;
      })
      .map((e) => {
        return 1;
      });
    if (currentLoseArr.length > 0) {
      setLoseResult(
        currentLoseArr.reduce((prev, curr) => {
          return prev + curr;
        })
      );
    } else {
      setLoseResult(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { winResult, loseResult };
}
