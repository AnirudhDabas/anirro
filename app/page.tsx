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
          I tend to build things that get out of hand. Built an AI goose tracker
          for my campus, it hit 1M+ views, thousands of daily users, and ended
          up on CBC and CTV. Won a couple national hackathons. Co-founded a
          media agency before university, ran it to $85K across 15+ clients.
        </p>
        <p>
          VP of Outreach at{" "}
          <a href="https://uwdsc.ca" target="_blank" rel="noopener noreferrer">
            UWDSC
          </a>{" "}
          right now. Exploring fall 2026 internships in SWE, AI infra, backend,
          or applied ML.
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
