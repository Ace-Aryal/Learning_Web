import React from 'react'
import { booksData } from './books'

import Link from 'next/link'
function ImagesPage() {
    return (
        <div className='container w-full h-full'>
            New Books<section className='grid grid-cols-1 gap-y-5 place-items-center sm:grid-cols-2 md:grid-cols-4 '>
                {booksData.map(book => {
                    return (
                        <Link key={book.id} href={`/photos-feed/${book.id}`}> <img loading='lazy' alt={book.description} src={book.coverImage} /></Link>

                    )
                })}
            </section>
        </div>

    )
}

export default ImagesPage