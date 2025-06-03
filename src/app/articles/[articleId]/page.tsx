import Link from "next/link"

type Props = {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "es" | "np" }>
}

export default async function NewsArticlePage({ params, searchParams }: Props) {
    const { articleId } = await params // capture dynamic params note use(params) & use(searchParams) if using client comp
    const { lang = "en" } = await searchParams // capture query params // also uing default values for fallback

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-200">
            <h1 className="text-3xl font-bold mb-4">
                Government Announces New Education Policy for 2025
            </h1>
            <h2><article>Aticle : {articleId} | language :{lang}</article></h2>
            <h2></h2>
            <p className="text-sm text-gray-500 mb-6">Published on June 3, 2025</p>

            <img
                src="https://source.unsplash.com/800x400/?school,education"
                alt="News article cover"
                className="w-full rounded-lg mb-6"
            />

            <article className="space-y-4 text-lg leading-relaxed">
                <p>
                    The Ministry of Education has unveiled a new policy aiming to revamp the
                    school curriculum nationwide. The initiative is focused on practical learning,
                    digital literacy, and mental health support for students.
                </p>
                <p>
                    “This reform is not just a change in subjects, but a transformation in how
                    students learn and interact with knowledge,” said the Education Minister.
                </p>
                <p>
                    The policy will be rolled out in phases, starting with pilot schools in all
                    provinces before full implementation in 2026.
                </p>

                <div>
                    <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                    <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
                    <Link href={`/articles/${articleId}?lang=np`}>Read in Nepali</Link>
                </div>
            </article>
        </div>
    );
}
