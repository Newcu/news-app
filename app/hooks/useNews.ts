// app/hooks/useNews.ts
'use client';

import { useEffect, useState } from 'react';
import { NewsItem, NewsCategory } from '../types';

interface NewsState {
  news: NewsItem[];
  isLoading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

interface UseNewsResult extends NewsState {
  fetchMoreNews: () => Promise<void>;
  refreshNews: () => Promise<void>;
}

export function useNews(initialCategory: NewsCategory = 'all', pageSize: number = 12): UseNewsResult {
  const [category, setCategory] = useState<NewsCategory>(initialCategory);
  const [state, setState] = useState<NewsState>({
    news: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPages: 1
  });

  // Handles category changes
  useEffect(() => {
    setState(prev => ({
      ...prev,
      news: [],
      page: 1,
      error: null
    }));
    fetchNews(1, true);
  }, [category]);

  async function fetchNews(pageNum: number, reset: boolean = false) {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await fetch(`/api/news?category=${category}&page=${pageNum}&limit=${pageSize}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
      
      const data = await response.json();
      
      setState(prev => ({
        ...prev,
        news: reset ? data.news : [...prev.news, ...data.news],
        page: pageNum,
        totalPages: data.pagination.totalPages,
        isLoading: false
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : 'An error occurred',
        isLoading: false
      }));
    }
  }

  const fetchMoreNews = async () => {
    if (state.isLoading || state.page >= state.totalPages) return;
    await fetchNews(state.page + 1);
  };

  const refreshNews = async () => {
    await fetchNews(1, true);
  };

  const changeCategory = (newCategory: NewsCategory) => {
    if (newCategory === category) return;
    setCategory(newCategory);
  };

  return {
    ...state,
    fetchMoreNews,
    refreshNews,
    changeCategory,
  };
}