
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
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary sm:px-3">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>
      
      <h3 className="mb-2 text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
      <p className="mb-3 text-sm text-muted-foreground line-clamp-2 sm:mb-4">{summary}</p>
      
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:mt-4">
        <span className="text-xs text-muted-foreground">{source}</span>
        
        <div className="flex gap-1 sm:gap-2">
          <button
            onClick={() => setMode("read")}
            className={`mode-switch ${mode === "read" ? "bg-primary text-primary-foreground" : ""}`}
            aria-label="Read mode"
          >
            <BookOpen className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMode("listen")}
            className={`mode-switch ${mode === "listen" ? "bg-primary text-primary-foreground" : ""}`}
            aria-label="Listen mode"
          >
            <Headphones className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMode("music")}
            className={`mode-switch ${mode === "music" ? "bg-primary text-primary-foreground" : ""}`}
            aria-label="Music mode"
          >
            <Play className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
