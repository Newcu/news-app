// app/components/NewsGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { NewsCategory } from '../types';
import Spinner from './Spinner';
import { useInView } from 'react-intersection-observer';

interface NewsGridProps {
  initialCategory?: NewsCategory;
}

export default function NewsGrid({ initialCategory = 'all' }: NewsGridProps) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [totalPages, setTotalPages] = useState(1);
  
  // For infinite scrolling
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });
  
  const categories = [
    { key: 'all', label: 'All News' },
    { key: 'tech', label: 'Technology' },
    { key: 'gaming', label: 'Gaming' },
    { key: 'sports', label: 'Sports' },
    { key: 'entertainment', label: 'Entertainment' },
    { key: 'world', label: 'World News' }
  ];
  
  const fetchNews = async (reset = false) => {
    if (isLoading || (!reset && page > totalPages)) return;
    
    const currentPage = reset ? 1 : page;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`/api/news?category=${category}&page=${currentPage}&limit=12`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      if (reset) {
        setNews(data.news);
      } else {
        setNews(prev => [...prev, ...data.news]);
      }
      
      setTotalPages(data.pagination.totalPages);
      
      if (!reset) {
        setPage(prevPage => prevPage + 1);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle category changes
  useEffect(() => {
    setPage(1);
    fetchNews(true);
  }, [category]);
  
  // Load more when scrolling to bottom
  useEffect(() => {
    if (inView && !isLoading && page <= totalPages) {
      fetchNews();
    }
  }, [inView]);
  
  const handleCategoryChange = (newCategory) => {
    if (newCategory === category) return;
    setCategory(newCategory);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 sm:sticky sm:top-[72px] py-4 bg-background z-10">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === cat.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => handleCategoryChange(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="p-4 mb-8 text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-100 rounded-lg">
          {error}
        </div>
      )}
      
      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
      
      {/* Initial Loading State */}
      {isLoading && news.length === 0 && (
        <div className="flex justify-center items-center min-h-[300px]">
          <Spinner />
        </div>
      )}
      
      {/* Empty State */}
      {!isLoading && news.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-400 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 5-7-5m14 8v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1m16-8l-7 5-7-5" />
          </svg>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">No news articles found</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try selecting a different category or check back later
          </p>
        </div>
      )}
      
      {/* Loading More / Load More */}
      <div ref={ref} className="mt-8 flex justify-center">
        {isLoading && news.length > 0 && <Spinner />}
        {!isLoading && page > totalPages && news.length > 0 && (
          <p className="text-gray-500 dark:text-gray-400">No more articles to load</p>
        )}
      </div>
    </div>
  );
}