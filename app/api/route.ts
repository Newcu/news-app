// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchNews } from '@/app/lib/parser';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category') || 'all';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  try {
    const allNews = await fetchNews(category);
    
    // Simple pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedNews = allNews.slice(startIndex, endIndex);
    
    return NextResponse.json({
      news: paginatedNews,
      pagination: {
        total: allNews.length,
        page,
        limit,
        totalPages: Math.ceil(allNews.length / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}