// src/components/GoogleReviews.tsx
import { useState } from "react";
import { Star, ExternalLink, ChevronDown } from "lucide-react";

interface Review {
  name: string;
  profileUrl: string;
  reviewCount: number;
  photoCount: number;
  isLocalGuide?: boolean;
  timeAgo: string;
  text: string;
  fullReviewUrl?: string;
}

const REVIEWS: Review[] = [
  { name: "Nikolaos Antonopoulos", profileUrl: "https://www.google.com/maps/contrib/100049113554864514730/reviews?hl=en-GB", reviewCount: 13, photoCount: 0, timeAgo: "4 weeks ago", text: "Excellent service all the time UP. Keep going" },
  { name: "Magic marc", profileUrl: "https://www.google.com/maps/contrib/113729650225320335527/reviews?hl=en-GB", reviewCount: 2, photoCount: 0, timeAgo: "4 weeks ago", text: "Great work and great price for my logo and banner" },
  { name: "janette lee", profileUrl: "https://www.google.com/maps/contrib/108003634601878432757/reviews?hl=en-GB", reviewCount: 13, photoCount: 3, isLocalGuide: true, timeAgo: "11 weeks ago", text: "Great service, fabulous ideas and very prompt responses would highly recommend saqib designs for logos for business...", fullReviewUrl: "https://www.google.com/local/business/#" },
  { name: "SKR Law", profileUrl: "https://www.google.com/maps/contrib/114268655582386773311/reviews?hl=en-GB", reviewCount: 1, photoCount: 0, timeAgo: "15 weeks ago", text: "Thank you very much Saqib. We had a great experience with your services. Thank your sorting out all of our meta -and...", fullReviewUrl: "https://www.google.com/local/business/#" },
  { name: "Christopher Paterson", profileUrl: "https://www.google.com/maps/contrib/105117627310250639135/reviews?hl=en-GB", reviewCount: 7, photoCount: 0, isLocalGuide: true, timeAgo: "16 weeks ago", text: "Boys on point and listens to your needs amazing service 🙌 👏" },
  { name: "Elsa Dore", profileUrl: "https://www.google.com/maps/contrib/110866885001566262825/reviews?hl=en-GB", reviewCount: 4, photoCount: 4, timeAgo: "16 weeks ago", text: "Fab service really quick and efficient and understood my brief well! Thanks again!" },
  { name: "Muhammad Uzair Hussain", profileUrl: "https://www.google.com/maps/contrib/109850171778619249598/reviews?hl=en-GB", reviewCount: 1, photoCount: 0, timeAgo: "20 weeks ago", text: "Good communication" },
  { name: "Ben Jones", profileUrl: "https://www.google.com/maps/contrib/101473147082265782564/reviews?hl=en-GB", reviewCount: 2, photoCount: 0, timeAgo: "34 weeks ago", text: "Great service and really happy with my poster ⚽️" },
  { name: "balal din", profileUrl: "https://www.google.com/maps/contrib/102249611983525471529/reviews?hl=en-GB", reviewCount: 6, photoCount: 1, timeAgo: "36 weeks ago", text: "SR Innovations has been exceptional in managing our Facebook Ads, delivering results far beyond our expectations. Their...", fullReviewUrl: "https://www.google.com/local/business/#" },
  { name: "Claston Rose", profileUrl: "https://www.google.com/maps/contrib/101666861415626543580/reviews?hl=en-GB", reviewCount: 2, photoCount: 11, timeAgo: "38 weeks ago", text: "These guys or out standing at what they do. They build my website, my business and posters and everything looked amazing. The process was simple and straightforward. 100% would recommend" },
  { name: "gabriela postolache", profileUrl: "https://www.google.com/maps/contrib/108992742022700097576/reviews?hl=en-GB", reviewCount: 48, photoCount: 117, isLocalGuide: true, timeAgo: "52 weeks ago", text: "⭐⭐⭐⭐⭐ Awesome experience with SR Innovation! I worked with Saqib and his team at SR...", fullReviewUrl: "https://www.google.com/local/business/#" },
  { name: "Irfan Shafaq", profileUrl: "https://www.google.com/maps/contrib/112110739346618073603/reviews?hl=en-GB", reviewCount: 12, photoCount: 1, timeAgo: "30 May 2025", text: "Really Enjoyed my experience with this company. Saqib explained and made this very easy to design logo and business card. Highly recommend" },
  { name: "Ajon Rolin", profileUrl: "https://www.google.com/maps/contrib/103015741798223509636/reviews?hl=en-GB", reviewCount: 1, photoCount: 0, timeAgo: "5 May 2025", text: "I run a property management company called White Time Property Group in East Sussex, UK, and joined SR Innovation in...", fullReviewUrl: "https://www.google.com/local/business/#" },
  { name: "crow twins", profileUrl: "https://www.google.com/maps/contrib/106398602432499457325/reviews?hl=en-GB", reviewCount: 7, photoCount: 2, timeAgo: "5 May 2025", text: "Great service. Definatly has its finger on the pulse. Looking forward to more of the same results" },
  { name: "Shouq Al Ameeri", profileUrl: "https://www.google.com/maps/contrib/105955959647313968349/reviews?hl=en-GB", reviewCount: 80, photoCount: 30, isLocalGuide: true, timeAgo: "3 May 2025", text: "Great service and good communication, I would recommend this business as it has brought my imaginations to reality." },
  { name: "Veronica Bien", profileUrl: "https://www.google.com/maps/contrib/108952455892754804352/reviews?hl=en-GB", reviewCount: 8, photoCount: 0, timeAgo: "3 May 2025", text: "Always very professional and helpful. Very responsive and understanding. With my demands and constant change of mind, very patient. Thank you for everything" },
  { name: "Rony Stephen", profileUrl: "https://www.google.com/maps/contrib/103687893509942628626/reviews?hl=en-GB", reviewCount: 6, photoCount: 6, timeAgo: "3 May 2025", text: "Highly recommend SR Innovations. They have a great team that are responsive and understand your needs well. They boosted my social media page a lot, produced great content and I saw fantastic results!!" },
  { name: "Stany joseph Joseph", profileUrl: "https://www.google.com/maps/contrib/115039115112009281961/reviews?hl=en-GB", reviewCount: 4, photoCount: 1, timeAgo: "3 May 2025", text: "" },
  { name: "Cordelia Gregory", profileUrl: "https://www.google.com/maps/contrib/106161937092513272860/reviews?hl=en-GB", reviewCount: 11, photoCount: 2, isLocalGuide: true, timeAgo: "29 Apr 2025", text: "I have been working with SR Innovation for over a year now and I couldn't be more pleased with the experience. He is...", fullReviewUrl: "https://www.google.com/local/business/#" },
];

const INITIAL_COUNT = 6;

const StarRow = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const GoogleReviews = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? REVIEWS : REVIEWS.slice(0, INITIAL_COUNT);
  const filtered = visible.filter((r) => r.text.trim().length > 0);

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="font-display font-semibold text-2xl">What our clients say</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <StarRow />
            <span className="font-semibold">5.0</span>
            <span className="text-muted-foreground text-sm">({REVIEWS.length} Google reviews)</span>
          </div>
        </div>
        <a
          href="https://g.page/r/CdPzl0XG8mKqEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Leave us a review
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <div
            key={r.profileUrl}
            className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  {initials(r.name)}
                </div>
                <div className="min-w-0">
                  <a
                    href={r.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm hover:underline truncate block"
                  >
                    {r.name}
                  </a>
                  <p className="text-xs text-muted-foreground truncate">
                    {r.isLocalGuide ? "Local Guide • " : ""}
                    {r.reviewCount} review{r.reviewCount !== 1 ? "s" : ""}
                    {r.photoCount > 0 ? ` • ${r.photoCount} photos` : ""}
                  </p>
                </div>
              </div>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="size-4 shrink-0 mt-1" />
            </div>

            <div className="flex items-center gap-2">
              <StarRow />
              <span className="text-xs text-muted-foreground">{r.timeAgo}</span>
            </div>

            <p className="text-sm text-foreground/90 leading-relaxed">
              {r.text}
              {r.fullReviewUrl && (
                <>
                  {" "}
                  <a
                    href={r.fullReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline whitespace-nowrap"
                  >
                    View full review
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>

      {REVIEWS.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-medium rounded-full border border-border px-5 py-2.5 hover:bg-muted transition-colors"
          >
            {expanded ? "Show less" : `Show all ${REVIEWS.length} reviews`}
            <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </section>
  );
};