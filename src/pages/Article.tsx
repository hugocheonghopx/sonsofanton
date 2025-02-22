
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Edit, Lightbulb, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LocationState {
  news: {
    title: string;
    summary: string;
    brands: string[];
    timestamp: string;
    category: string;
    image: string;
  };
}

// Mock detailed content (in real app, this would come from an API)
const detailedContent = {
  publishedAt: "2024-03-15T09:30:00Z",
  lastEdited: "2024-03-15T11:45:00Z",
  keyTakeaways: [
    "Global temperatures reached record highs across 150 countries",
    "New international framework established for carbon reduction",
    "Technology sector pledges $50 billion for green initiatives"
  ],
  paragraphs: [
    {
      text: "In an unprecedented gathering of world leaders, the Global Climate Summit has culminated in a historic agreement that sets ambitious targets for reducing greenhouse gas emissions. The landmark decision, reached after intensive negotiations spanning 14 days, represents a crucial turning point in international climate action.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60"
    },
    {
      text: "The agreement introduces legally binding commitments for all participating nations to achieve net-zero emissions by 2050. This marks a significant departure from previous accords, which relied primarily on voluntary pledges. The new framework includes robust monitoring mechanisms and financial penalties for non-compliance.",
    },
    {
      text: "Technology companies have emerged as key allies in this global effort. A consortium of leading tech firms has announced a combined $50 billion investment in green technologies over the next five years. This unprecedented commitment will focus on developing innovative solutions for renewable energy storage, carbon capture, and sustainable transportation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60"
    }
  ],
  contentStyle: "Detailed Analysis" // Could be "Simplified", "Technical", "Academic", etc.
};

export default function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const { news } = (location.state as LocationState) || { news: null };

  if (!news) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>No article content found. Please select a news article first.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <article className="prose prose-invert max-w-none">
          {/* Content Style Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="mr-1 h-4 w-4 inline" />
              {detailedContent.contentStyle}
            </Badge>
          </div>

          {/* Article Header */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{news.title}</h1>
          
          {/* Metadata */}
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Published: {formatDate(detailedContent.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Edit className="h-4 w-4" />
              <span>Last edited: {formatDate(detailedContent.lastEdited)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {news.brands.map((brand) => (
                <Badge key={brand} variant="outline">
                  {brand}
                </Badge>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-8 h-[400px] overflow-hidden rounded-xl">
            <img
              src={news.image}
              alt={news.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Key Takeaways */}
          <div className="mb-8 rounded-lg bg-secondary/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <Lightbulb className="h-5 w-5" />
              Key Takeaways
            </h2>
            <ul className="space-y-3">
              {detailedContent.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="font-medium text-primary">#{index + 1}</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="space-y-8">
            {detailedContent.paragraphs.map((paragraph, index) => (
              <div key={index} className="space-y-4">
                <p className="text-lg leading-relaxed">{paragraph.text}</p>
                {paragraph.image && (
                  <figure className="my-6">
                    <img
                      src={paragraph.image}
                      alt={`Illustration for paragraph ${index + 1}`}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                      Image source: Unsplash
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
