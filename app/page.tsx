import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>Anirudh Dabas</PageTitle>
      <div className="mt-10 space-y-6">
        <p>
          I&apos;m a Computer Science student at the{" "}
          <a
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Waterloo
          </a>{" "}
          on the President&apos;s Scholarship of Distinction, and co-founder of{" "}
          <a href="#">Trend Weavers Media</a>. I like building things that go
          viral, win hackathons, or both.
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
