import { GifAPIResponse } from "../components/GifAPIResponse";
import { Gif } from "./Gif";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=ggtd2ZKHy8Tdzhc7MwUxNM9RXXbC6Msu`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs: Gif[] = data.map((img: GifAPIResponse) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
