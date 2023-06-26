import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Gif } from "../helpers/Gif";

interface State {
  data: Gif[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) =>
      setTimeout(() => setState({ data: imgs, loading: false }), 200)
    );
  }, [category]);

  return state;
};
