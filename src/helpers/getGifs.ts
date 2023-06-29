import { GifObjectAPI } from "./interfaces/GifObjectAPI";
import { Gif } from "./interfaces/Gif";
import { Pagination } from "./interfaces/PaginationAPI";

export const getGifs = async (
  category: string,
  offset: number,
  limit: number
) => {
  console.log(limit);

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&offset=${offset}&api_key=ggtd2ZKHy8Tdzhc7MwUxNM9RXXbC6Msu`;

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
