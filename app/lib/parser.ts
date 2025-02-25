// app/lib/parser.ts
import { NewsItem, RssFeed } from '../types';
import { rssFeeds } from './rssFeeds';

/**
 * Simple function to generate a unique ID
 */
function generateId(str: string): string {
  return `${str}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Fetches an RSS feed and converts it to JSON
 */
async function fetchRssFeed(feedUrl: string): Promise<any> {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching RSS feed ${feedUrl}:`, error);
    return null;
  }
}

/**
 * Extracts the first image URL from content
 */
function extractImageFromContent(content: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
}

/**
 * Convert an RSS item to our NewsItem format
 */
function convertRssItemToNewsItem(item: any, feed: RssFeed): NewsItem {
  return {
    id: generateId(item.title),
    title: item.title,
    description: item.description,
    content: item.content,
    link: item.link,
    pubDate: item.pubDate,
    imageUrl: item.enclosure?.link || item.thumbnail || extractImageFromContent(item.content || item.description || ''),
    source: feed.source,
    category: feed.category
  };
}

/**
 * Calculate a relevance score for ranking
 * Higher score = more relevant/entertaining
 */
function calculateRelevanceScore(item: NewsItem): number {
  const freshnessScore = new Date(item.pubDate).getTime() / 1000000000;
  const titleLength = item.title.length;
  const hasImage = item.imageUrl ? 10 : 0;
  
  // Items with images, newer date, and good title length are ranked higher
  return freshnessScore + (hasImage) + (titleLength > 20 && titleLength < 100 ? 5 : 0);
}

/**
 * Mock data for testing without API calls
 */
const getMockNewsItems = (category?: string): NewsItem[] => {
  const mockCategories = ['tech', 'gaming', 'sports', 'entertainment', 'world'] as const;
  
  // Create 5 items for each category
  const allMockItems = mockCategories.flatMap(cat => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: `mock-${cat}-${i}`,
      title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} News Item ${i+1}`,
      description: `This is a sample description for a ${cat} news item. It contains enough text to give you an idea of what the article is about.`,
      content: `<p>This is the full content of the article. It would typically be much longer and include more details about the ${cat} news.</p><p>It might include multiple paragraphs, lists, or other HTML elements.</p>`,
      link: `https://example.com/${cat}/article-${i+1}`,
      pubDate: new Date(Date.now() - i * 3600000).toISOString(),
      imageUrl: `https://picsum.photos/id/${(i+1) * 10}/640/360`,
      source: `${cat.charAt(0).toUpperCase() + cat.slice(1)} News Source`,
      category: cat
    }));
  });
  
  if (category && category !== 'all') {
    return allMockItems.filter(item => item.category === category);
  }
  
  return allMockItems;
};

/**
 * Fetch news from all RSS feeds or for a specific category
 * Falls back to mock data for development
 */
export async function fetchNews(category?: string): Promise<NewsItem[]> {
  // Use mock data for development
  return getMockNewsItems(category);

  /* Uncomment to use real RSS feed data
  const feedsToFetch = category && category !== 'all' 
    ? rssFeeds.filter(feed => feed.category === category)
    : rssFeeds;
  
  const allNewsPromises = feedsToFetch.map(async (feed) => {
    const feedData = await fetchRssFeed(feed.url);
    
    if (!feedData || !feedData.items) {
      return [];
    }
    
    return feedData.items.map((item: any) => convertRssItemToNewsItem(item, feed));
  });
  
  const allNewsArrays = await Promise.all(allNewsPromises);
  const allNews = allNewsArrays.flat();
  
  // Sort by relevance score (descending)
  return allNews.sort((a, b) => calculateRelevanceScore(b) - calculateRelevanceScore(a));
  */
}