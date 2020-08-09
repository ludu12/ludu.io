export interface Book {
  name: string;
  url: string;
  added?: string;
  topic: string;
  media: string;
  cover: string;
}

export interface AudibleBook {
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
