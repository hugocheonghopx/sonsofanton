
import { Play, Headphones, BookOpen } from "lucide-react";
import { useState } from "react";

interface NewsCardProps {
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  category: string;
}

export default function NewsCard({ title, summary, source, timestamp, category }: NewsCardProps) {
  const [mode, setMode] = useState<"read" | "listen" | "music">("read");

  return (
    <div className="news-card">
      <div className="mb-4 flex justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>
      
      <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{summary}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{source}</span>
        
        <div className="flex gap-2">
          <button
            onClick={() => setMode("read")}
            className={`mode-switch ${mode === "read" ? "bg-primary text-primary-foreground" : ""}`}
          >
            <BookOpen className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMode("listen")}
            className={`mode-switch ${mode === "listen" ? "bg-primary text-primary-foreground" : ""}`}
          >
            <Headphones className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMode("music")}
            className={`mode-switch ${mode === "music" ? "bg-primary text-primary-foreground" : ""}`}
          >
            <Play className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
