export interface Book {
  id: string;
  title: string;
  author: string;
  date: string;
  media: string;
  mySummary: string;
  cover: string;
  contentHtml: string;
  link: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  contentHtml: string;
}

export interface SpotifySong {
  isPlaying: boolean;
  album?: string;
  title?: string;
  artist?: string;
  albumCoverUrl?: string;
  url?: string;
}
