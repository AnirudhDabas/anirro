import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>
        Anirudh Dabas <span className="hindi">(अनिरुद्ध डबास)</span>
      </PageTitle>
      <div className="mt-10 space-y-5">
        <p>You can call me Ani.</p>
        <p>
          waterloo cs, 18. I build things that ship — sometimes they go viral.
        </p>
        <p>
          I care most about AI infrastructure: the messy parts between a model
          and a user where reliability, latency, and cost actually get decided.
        </p>
        <p>
          I serve as VP of{" "}
          <a href="https://uwdsc.ca" target="_blank" rel="noopener noreferrer">
            UWDSC
          </a>
          , Waterloo&rsquo;s data science club.
        </p>
        <p>
          Previously: built{" "}
          <a
            href="https://waddleloo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            waddleloo.com
          </a>{" "}
          (1M+ views, CBC/CTV coverage), won Hack Canada 2026, co-founded a
          media agency that did $85K+ in revenue across 15+ clients.
        </p>
        <p>
          Open to summer 2026 internships in AI infra, backend, or applied ML —
          say hi at{" "}
          <a href="mailto:a2dabas@uwaterloo.ca">a2dabas@uwaterloo.ca</a>.
        </p>
      </div>
    </>
  );
}
