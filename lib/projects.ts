export type Project = {
  name: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "waddleloo.com",
    href: "https://waddleloo.com",
    description:
      "Full-stack AI goose tracking platform for UW campus. Went viral with 1M+ views, 1K+ daily active users at peak, and covered by CBC and CTV News. YOLOv8 + Gemini Vision pipeline, OSRM route planner that reroutes around goose hotspots within 60m. Expanded to WLU.",
  },
  {
    name: "bystander",
    href: "https://github.com/AnirudhDabas", // TODO: replace with real link
    description:
      "Hack Canada 2026 winner. Dockerized a clinically validated C++ biometrics SDK into a Node.js backend for contactless heart rate and breathing rate extraction from video. Gemini Vision triage scoring 1–10, ElevenLabs voice coaching, Twilio SMS alerts to nearby first aiders.",
  },
  {
    name: "child abuse prevention app",
    href: "https://github.com/AnirudhDabas", // TODO
    description:
      "1st place at a national hackathon. Cross-platform mobile safety app with anonymous AI chat for at-risk youth. Fine-tuned DistilBERT for real-time high-risk language detection, E2E encrypted messaging, severity-based alert routing, admin triage dashboard.",
  },
  {
    name: "trend weavers media",
    href: "#", // TODO
    description:
      "Co-founder (2023–2025). Built full-stack automation and analytics tools driving $85K+ revenue across 15+ clients. Python pipelines integrating Meta and TikTok APIs to automate weekly reporting, saving 20+ hours/month. Client platforms on Next.js + Supabase with RLS.",
  },
  {
    name: "findme (talent4assure)",
    href: "#", // TODO
    description:
      "Built real-time GPS ingestion, geofence processing, background location syncing, and emergency alerts for a safety app. React Native + Node.js + MongoDB. Cut API latency by 30% via indexing, geospatial lookup caching, and aggregation pipeline tuning.",
  },
];
