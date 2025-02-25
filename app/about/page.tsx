// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About NewsFeed
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            How we curate the most entertaining news for you
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            NewsFeed aims to provide a clutter-free, engaging news experience. We aggregate content from 
            trusted sources across various categories, and use smart algorithms to bring you the most 
            relevant and entertaining stories.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-lg mb-4">
            Our platform fetches news from multiple RSS feeds in real-time and processes them using the following criteria:
          </p>
          <ul className="list-disc ml-8 mb-8 text-lg space-y-2">
            <li>Freshness - newer stories are prioritized</li>
            <li>Visual appeal - stories with high-quality images rank higher</li>
            <li>Content quality - well-written, informative stories take precedence</li>
            <li>Source credibility - we only aggregate from trusted publishers</li>
          </ul>
          
          <h2 className="text-3xl font-bold mb-6">Our Sources</h2>
          <p className="text-lg mb-4">
            We pull news from a variety of respected sources across different categories:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Technology</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>TechCrunch</li>
                <li>Wired</li>
                <li>The Verge</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Gaming</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Polygon</li>
                <li>Kotaku</li>
                <li>Eurogamer</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Sports</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>ESPN</li>
                <li>Yahoo Sports</li>
                <li>Sky Sports</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Entertainment</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Variety</li>
                <li>Hollywood Reporter</li>
                <li>Vulture</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-xl mb-2">World News</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>New York Times</li>
                <li>BBC</li>
                <li>Al Jazeera</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">Category Filtering</h3>
              <p>Browse news by categories like Technology, Gaming, Sports, Entertainment, and World News.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">Infinite Scrolling</h3>
              <p>No need to click through pages - just keep scrolling to load more content.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">Dark Mode</h3>
              <p>Switch between light and dark themes for comfortable reading day or night.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">Responsive Design</h3>
              <p>Enjoy a seamless experience across desktop, tablet, and mobile devices.</p>
            </div>
          </div>
          
          <p className="text-lg">
            NewsFeed is built with Next.js, React, and Tailwind CSS, focusing on performance and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}