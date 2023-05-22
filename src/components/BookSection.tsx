import BookCard from "@/components/BookCard"
import { booksType } from "@/helpers/constants/book-type"

const BookSection = () => {
  return (
    <div className="bg-white w-full p-7 rounded-md">
      {/* <BooksHeader /> */}

      <div className="flex w-full">
        <div className="bg-zinc-200 p-5 rounded-md border border-zinc-400 shadow-sm">
          <a href="/" className="px-3 py-4">Books</a>

          <ul className="decoration-dotted decoration-black">
            {booksType.map((type) => (
              <li key={type}>
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1  ml-7">
          <h1>
            Tipo do livro
          </h1>

          <div className="h-[1px] w-full bg-zinc-200 rounded" />

          <p>32 results - showing 1 to 20.</p>

          <BookCard />
        </div>
      </div>
    </div>
  )
}

export default BookSection