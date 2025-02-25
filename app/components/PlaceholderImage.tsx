// app/components/PlaceholderImage.tsx
import { CSSProperties } from 'react';

type PlaceholderImageProps = {
  category?: string;
  style?: CSSProperties;
  className?: string;
};

export default function PlaceholderImage({ 
  category = 'news', 
  style, 
  className = '' 
}: PlaceholderImageProps) {
  // Map categories to appropriate background colors
  const categoryColors = {
    tech: '#3b82f6',       // blue-500
    gaming: '#8b5cf6',     // violet-500
    sports: '#ef4444',     // red-500
    entertainment: '#ec4899', // pink-500
    world: '#10b981',      // emerald-500
    news: '#6b7280',       // gray-500
  };
  
  const backgroundColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.news;
  
  return (
    <div
      className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}
      style={style}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <rect x="16" y="20" width="48" height="40" rx="4" fill={backgroundColor} />
        <circle cx="28" cy="32" r="6" fill="white" />
        <path d="M16 48L29 38L38 46L54 32L64 40V56C64 58.2091 62.2091 60 60 60H20C17.7909 60 16 58.2091 16 56V48Z" fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  );
}