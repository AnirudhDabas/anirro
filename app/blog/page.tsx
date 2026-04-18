import PageTitle from "@/components/PageTitle";

export default function Blog() {
  return (
    <>
      <PageTitle>
        Anirudh Dabas <span className="hindi">(अनिरुद्ध डबास)</span>
      </PageTitle>
      <div className="mt-10">
        <p>
          <a
            href="https://medium.com/@anirudhdabas_72519/everything-you-need-to-know-about-the-hidden-cost-of-adding-an-llm-6a0481671fd4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Everything you need to know about the hidden cost of adding an LLM
          </a>
        </p>
      </div>
    </>
  );
}
