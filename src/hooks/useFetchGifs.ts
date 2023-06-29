import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Gif } from "../helpers/interfaces/Gif";

interface State {
  data: Gif[];
  loading: boolean;
  count: number;
}

export const useFetchGifs = (
  category: string,
  offset: number,
  limit: number
) => {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    count: 0,
  });

  useEffect(() => {
    getGifs(category, offset, limit).then(({ imgs, pagination }) =>
      setTimeout(
        () =>
          setState({
            data: imgs,
            loading: false,
            count: pagination.total_count,
          }),
        0
      )
    );
  }, [category, offset, limit]);

  return state;
};
