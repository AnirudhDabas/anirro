export type Project = {
  name: string;
  href: string;
  description: string;
};

export type EarlyProject = {
  name: string;
  href?: string;
  tech: string;
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
    name: "stoody",
    href: "https://getstoody.com",
    description:
      "AI-driven study partner matching for university students. Matches on course overlap, learning preferences, availability, and collaboration style. Built on Next.js + Supabase with embedding-based compatibility scoring. Currently in controlled pre-launch.",
  },
  {
    name: "feedfilterai",
    href: "https://feedfilterai.vercel.app",
    description:
      "End-to-end AI moderation and analysis pipeline for social media content. Detects toxicity, sentiment, bias, named entities, and trending topics across thousands of posts in real time. FastAPI + Next.js + Zephyr-7B + GLiNER + SentenceTransformers + Detoxify + Docker.",
  },
  {
    name: "shelf",
    href: "https://github.com/AnirudhDabas/shelf",
    description: "Autonomous search optimization for storefronts. Early stage.",
  },
  {
    name: "delriz",
    href: "https://delriz.vercel.app",
    description:
      "Full-stack eCommerce platform that ran in production with live payments. Express + MongoDB backend with indexed queries and schema validation, Supabase Auth with row-level security, Razorpay integration with webhook-driven order updates. Intentionally decommissioned after the underlying business wound down.",
  },
  {
    name: "reimagine relief",
    href: "https://www.instagram.com/reimagine_relief/",
    description:
      "Co-founded a disaster relief initiative and built an offline-first, event-driven analytics platform to track aid distribution under unreliable network conditions. Mobilized 100+ volunteers, assisted 2,000+ flood victims.",
  },
  {
    name: "viberotech",
    href: "#", // TODO: add link if one exists
    description:
      "Accessibility-focused prototype that translates audio into vibrotactile feedback so d/Deaf and hard-of-hearing users can experience music through touch. Controlled frequency sweeps, burst rattle tests, and track-level vibrotactile mapping.",
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

export const earlyProjects: EarlyProject[] = [
  {
    name: "minesweeper ai",
    href: "https://github.com/AnirudhDabas",
    tech: "Python, Pygame",
    description:
      "AI that autonomously plays Minesweeper by analyzing board states and making rule-based inferences. Built in pure Python with Pygame.",
  },
  {
    name: "api rate limiter",
    tech: "System Design, Distributed Systems",
    description:
      "Private service for deterministic request throttling, burst handling, and scalable abuse prevention across distributed backends.",
  },
  {
    name: "distributed job queue",
    href: "https://github.com/AnirudhDabas",
    tech: "Node.js, Redis",
    description:
      "Background job processing system with retry logic, failure isolation, idempotent execution, and graceful recovery from transient failures.",
  },
  {
    name: "smartgallery",
    tech: "Django, InsightFace, OpenCV, Scikit-learn",
    description:
      "Self-hosted photo management system that organizes libraries by people and events using face detection, identity clustering, and timestamp-based event grouping.",
  },
];
