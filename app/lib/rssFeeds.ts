// app/lib/rssFeeds.ts
import { RssFeed } from '../types';

export const rssFeeds: RssFeed[] = [
  // Tech
  { url: 'https://techcrunch.com/feed/', category: 'tech', source: 'TechCrunch' },
  { url: 'https://www.wired.com/feed/rss', category: 'tech', source: 'Wired' },
  { url: 'https://www.theverge.com/rss/index.xml', category: 'tech', source: 'The Verge' },
  
  // Gaming
  { url: 'https://www.polygon.com/rss/index.xml', category: 'gaming', source: 'Polygon' },
  { url: 'https://kotaku.com/rss', category: 'gaming', source: 'Kotaku' },
  { url: 'https://www.eurogamer.net/?format=rss', category: 'gaming', source: 'Eurogamer' },
  
  // Sports
  { url: 'https://www.espn.com/espn/rss/news', category: 'sports', source: 'ESPN' },
  { url: 'https://sports.yahoo.com/rss/', category: 'sports', source: 'Yahoo Sports' },
  { url: 'https://www.skysports.com/rss/12040', category: 'sports', source: 'Sky Sports' },
  
  // Entertainment
  { url: 'https://variety.com/feed/', category: 'entertainment', source: 'Variety' },
  { url: 'https://www.hollywoodreporter.com/feed/', category: 'entertainment', source: 'Hollywood Reporter' },
  { url: 'https://www.vulture.com/rss/', category: 'entertainment', source: 'Vulture' },
  
  // World News
  { url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', category: 'world', source: 'NY Times' },
  { url: 'https://feeds.bbci.co.uk/news/world/rss.xml', category: 'world', source: 'BBC' },
  { url: 'https://www.aljazeera.com/xml/rss/all.xml', category: 'world', source: 'Al Jazeera' }
];