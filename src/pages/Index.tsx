
import { useState } from "react";
import { Settings } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";

// Mock data for demonstration
const mockNews = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "World leaders have agreed to unprecedented measures to combat climate change in a landmark decision at the latest climate summit.",
    brands: ["BBC", "Reuters", "AP"],
    timestamp: "2 hours ago",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Tech Innovation Breakthrough in Renewable Energy",
    summary: "Scientists announce a revolutionary breakthrough in solar panel efficiency, potentially transforming the renewable energy landscape.",
    brands: ["TechCrunch", "Wired", "The Verge"],
    timestamp: "4 hours ago",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Major Economic Policy Shift Announced",
    summary: "Central banks worldwide coordinate on new economic measures aimed at stabilizing global markets and promoting sustainable growth.",
    brands: ["Bloomberg", "Financial Times", "WSJ"],
    timestamp: "6 hours ago",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60"
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("for you");
  const categories = ["for you", "technology", "politics", "environment", "economy", "culture"];

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 transition-all duration-300 sm:p-6 md:p-8 lg:ml-64">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-muted-foreground sm:text-xl">{getGreeting()}</h2>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              For You
            </h1>
          </div>
          <button
            className="rounded-full bg-secondary p-2 transition-colors hover:bg-secondary/80"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
        
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
              {category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
