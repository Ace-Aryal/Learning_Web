import React from "react";
import { booksData } from "../books";
// type Book = {
//   id: number,
//   title: string,
//   author: string,
//   coverImage: string,
//   description: string,
// };

export default async function BookCard({ params }: {
  params: Promise<{ bookId: string }>
}) {
  const { bookId } = (await params)
  const book = booksData.find(book => book.id === Number(bookId))
  if (!book) {
    return (
      <div>Couldn&apos;t find a book</div>
    )
  }


  return (


    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-60 object-cover"

      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{book.title}Not Intercept</h2>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <p className="text-sm text-gray-700">{book.description}</p>
      </div>
    </div>
  )



}
