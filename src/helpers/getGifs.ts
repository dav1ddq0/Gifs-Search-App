import { GifObjectAPI } from "./interfaces/GifObjectAPI";
import { Gif } from "./interfaces/Gif";
import { Pagination } from "./interfaces/PaginationAPI";

export const getGifs = async (
  category: string,
  offset: number,
  limit: number
) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&offset=${offset}&api_key=${process.env.REACT_APP_API_KEY}`;

  const resp = await fetch(url);
  const { data, pagination }: { data: GifObjectAPI[]; pagination: Pagination } =
    await resp.json();

  const gifs: Gif[] = data.map((img: GifObjectAPI) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return { imgs: gifs, pagination: pagination };
};
