// app/types.ts
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  link: string;
  pubDate: string;
  imageUrl: string | null;
  source: string;
  category: string;
}

export type NewsCategory = 
  | 'all'
  | 'tech'
  | 'gaming'
  | 'sports'
  | 'entertainment'
  | 'world';

export interface RssFeed {
  url: string;
  category: NewsCategory;
  source: string;
}