import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
      <Link href="/articles/breaking-news-123?lang=np">Read in Nepali</Link>
    </div>
  );
}
