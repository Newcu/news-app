// app/components/NewsCard.tsx
import { NewsItem } from '../types';
import Image from 'next/image';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PlaceholderImage from './PlaceholderImage';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const { title, description, imageUrl, pubDate, source, link, category } = item;
  const [imageError, setImageError] = useState(false);
  
  const formattedDate = () => {
    try {
      return formatDistanceToNow(new Date(pubDate), { addSuffix: true });
    } catch (e) {
      return 'Recently';
    }
  };
  
  // Create a truncated description without HTML tags
  const cleanDescription = description
    ? description.replace(/<[^>]*>?/gm, '').substring(0, 120) + (description.length > 120 ? '...' : '')
    : '';
  
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        {imageUrl && !imageError ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
            unoptimized // Skip image optimization for external images
          />
        ) : (
          <PlaceholderImage 
            category={category} 
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
            {source}
          </span>
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            {formattedDate()}
          </span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
          {cleanDescription}
        </p>
        
        <div className="mt-auto text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
          Read more
        </div>
      </div>
    </a>
  );
}