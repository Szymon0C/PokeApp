import { useEffect, useState } from "react";

import useDraw from "./useDraw";
import axios from "axios";

export default function useFights(index1, index2) {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [winner, setWinner] = useState(null);
  const { drawWinner } = useDraw();

  useEffect(() => {
    if (index1) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${index1}`).then((res) => {
        setData1(res.data);
      });
    }
  }, [index1]);

  useEffect(() => {
    if (index2) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${index2}`).then((res) => {
        setData2(res.data);
      });
    }
  }, [index2]);

  const pokemon1 = data1?.base_experience * data1?.weight;
  const pokemon2 = data2?.base_experience * data2?.weight;

  useEffect(() => {
    if (pokemon1 > pokemon2) {
      setWinner(index1);
    }
    if (pokemon1 < pokemon2) {
      setWinner(index2);
    }
    if (pokemon1 === pokemon2) {
      if (drawWinner) {
        setWinner(index2);
      } else {
        setWinner(index1);
      }
    }
  }, [data1, data2]);

  return { winner };
}
