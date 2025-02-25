# NewsFeed - Modern News Aggregator

A modern, responsive news aggregator built with Next.js that fetches and displays news from multiple RSS feeds, ranking them based on relevance and entertainment value.

## Features

- **Modern UI/UX**: Clean and engaging layout using Tailwind CSS
- **Multi-source News**: Aggregates news from various trusted sources
- **Intelligent Ranking**: Displays news based on relevance and entertainment value
- **Category Filtering**: Filter news by tech, gaming, sports, entertainment, and world news
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Infinite Scroll**: Smooth loading of additional content as you scroll

## Technology Stack

- **Next.js 15**: For server-side rendering and static site generation
- **React 19**: For building the user interface
- **Tailwind CSS**: For styling
- **TypeScript**: For type-safe code

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

The application fetches news from multiple RSS feeds using the RSS2JSON API service. The news items are then processed, ranked based on factors like freshness, image availability, and title quality, and displayed in an appealing grid layout.

News can be filtered by category, and more content loads automatically as the user scrolls down the page.

## Project Structure

- **app/**: Next.js app router
  - **components/**: React components
  - **lib/**: Utility functions and data
  - **api/**: API routes
  - **types.ts**: TypeScript type definitions
- **public/**: Static assets

## Deployment

This Next.js app can be deployed on Vercel with zero configuration. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnewsfeed)

## License

MIT