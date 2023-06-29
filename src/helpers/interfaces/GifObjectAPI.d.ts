export interface GifObjectAPI {
  analytics: {
    onload: any;
    onclick: any;
    onsent: any;
  };
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images?: {
    original: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    downsized: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    downsized_large: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    downsized_medium: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    downsized_small: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_height: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_height_downsampled: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_height_small: {
      url: string;
      width: string;
      height: string;
      mp4_size: string;
      mp4: string;
    };
    fixed_height_small_still: {
      url: string;
      width: string;
      height: string;
    };
    fixed_height_still: {
      url: string;
      width: string;
      height: string;
    };
    fixed_width: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_width_downsampled: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_width_small: {
      url: string;
      width: string;
      height: string;
      mp4_size: string;
      mp4: string;
    };
    fixed_width_small_still: {
      url: string;
      width: string;
      height: string;
    };
    fixed_width_still: {
      url: string;
      width: string;
      height: string;
    };
    looping: {
      mp4_size: string;
      mp4: string;
    };
    original_still: {
      url: string;
      width: string;
      height: string;
    };
    original_mp4: {
      width: string;
      height: string;
      mp4_size: string;
      mp4: string;
    };
    preview: {
      width: string;
      height: string;
      mp4_size: string;
      mp4: string;
    };
    preview_gif: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    preview_webp: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    "480w_still": {
      url: string;
      width: string;
      height: string;
    };
    hd?: {
      width: string;
      height: string;
      mp4_size: string;
      mp4: string;
    };
  };
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  username: string;
}
