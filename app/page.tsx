import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>Anirudh Dabas (अनिरुद्ध दाबास)</PageTitle>
      <div className="mt-10 space-y-6">
        <p>waterloo cs, 18.</p>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            letterSpacing: "0.4em",
            fontSize: "0.75rem",
          }}
        >
          ✦ ✦ ✦
        </p>
        <div>
          <p>In my lifetime I want to:</p>
          <ul className="list-none space-y-1 pl-0">
            <li>— TODO: replace with your real goals</li>
            <li>— TODO: replace with your real goals</li>
            <li>— TODO: replace with your real goals</li>
          </ul>
        </div>
      </div>
    </>
  );
}
