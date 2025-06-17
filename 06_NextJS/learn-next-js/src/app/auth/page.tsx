import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Welcome to the Homepage
      </h1>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground">
        This is a modern, clean homepage layout using Next.js. Styled similar to
        ShadCN but built from scratch.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/auth/dash">
          {" "}
          <button className="px-6 py-2 bg-primary  rounded-xl hover:bg-primary/90">
            Get Started
          </button>
        </Link>

        <button className="px-6 py-2 border border-input rounded-xl hover:bg-accent hover:text-accent-foreground">
          Learn More
        </button>
      </div>
    </section>
  );
}
