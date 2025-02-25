// app/page.tsx
import NewsGrid from "./components/NewsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Daily Dose of News
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Aggregated from the best sources, ranked for relevance and entertainment value.
          </p>
        </div>
      </div>
      
      <NewsGrid />
    </div>
  );
}