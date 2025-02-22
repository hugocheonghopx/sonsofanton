
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";

// Mock data for demonstration
const mockNews = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "World leaders have agreed to unprecedented measures to combat climate change in a landmark decision at the latest climate summit.",
    source: "Global News Network",
    timestamp: "2 hours ago",
    category: "Environment",
  },
  {
    id: 2,
    title: "Tech Innovation Breakthrough in Renewable Energy",
    summary: "Scientists announce a revolutionary breakthrough in solar panel efficiency, potentially transforming the renewable energy landscape.",
    source: "Tech Daily",
    timestamp: "4 hours ago",
    category: "Technology",
  },
  {
    id: 3,
    title: "Major Economic Policy Shift Announced",
    summary: "Central banks worldwide coordinate on new economic measures aimed at stabilizing global markets and promoting sustainable growth.",
    source: "Financial Times",
    timestamp: "6 hours ago",
    category: "Economy",
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "technology", "politics", "environment", "economy", "culture"];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 transition-all duration-300 sm:p-6 md:p-8 lg:ml-64">
        <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl md:mb-8 md:text-4xl">
          For You
        </h1>
        
        <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </main>
    </div>
  );
}
