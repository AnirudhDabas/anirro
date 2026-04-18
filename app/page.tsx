import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>
        Anirudh Dabas <span className="hindi">(अनिरुद्ध डबास)</span>
      </PageTitle>
      <div className="mt-10 space-y-5">
        <p>You can call me Ani.</p>
        <p>18, CS at Waterloo. I build stuff.</p>
        <p>
          I care most about AI infrastructure: the parts between a model and a
          user where reliability, latency, and cost actually get decided.
        </p>
        <p>
          Built an{" "}
          <a
            href="https://waddleloo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI goose tracker
          </a>{" "}
          for my campus, 1M+ views, thousands of daily users, covered by{" "}
          <a
            href="https://www.cbc.ca/news/canada/kitchener-waterloo/avoid-the-honk-interactive-map-helps-waterloo-students-stay-away-from-canada-geese-9.7151994"
            target="_blank"
            rel="noopener noreferrer"
          >
            CBC
          </a>{" "}
          and{" "}
          <a
            href="https://www.ctvnews.ca/kitchener/article/waddleloo-map-helps-university-students-avoid-geese-during-nesting-season/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTV
          </a>
          . Won a couple{" "}
          <a
            href="https://www.linkedin.com/in/anirudhdabas"
            target="_blank"
            rel="noopener noreferrer"
          >
            national hackathons
          </a>
          . Co-founded a{" "}
          <a
            href="https://www.instagram.com/trendweaversmedia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            media agency
          </a>{" "}
          before university, ran it to $85K across 15+ clients.
        </p>
        <p>
          VP of Outreach at{" "}
          <a href="https://uwdsc.ca" target="_blank" rel="noopener noreferrer">
            UWDSC
          </a>
          . Exploring fall 2026 internships in SWE, AI infra, backend, or
          applied ML.
        </p>
        <p>
          Say hi at{" "}
          <a href="mailto:a2dabas@uwaterloo.ca">a2dabas@uwaterloo.ca</a> or
          anywhere on the left.
        </p>
      </div>
    </>
  );
}
