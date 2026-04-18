type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <header>
      <h1 className="text-[2.5rem] leading-tight font-normal tracking-tight">
        {children}
      </h1>
      <hr className="mt-6 border-0 border-t border-[var(--rule)]" />
    </header>
  );
}
