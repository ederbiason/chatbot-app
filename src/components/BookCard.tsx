import { Check, Star } from "lucide-react"
import Image from "next/image"


const BookCard = () => {
  return (
    <div className="w-56 flex flex-col items-center justify-center">
      <div className="border border-black">
        <a href="">
          <img className="p-1" src="https://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg" alt="book image" />
        </a>
      </div>

      <div className="flex">
        <Star fill="true" />
        <Star fill="true" />
        <Star />
      </div>

      <p>
        Sharp Objects
      </p>

      <div className="flex flex-col items-center justify-center">
        <span className="text-green-500">
          $47.82
        </span>

        <p className="flex gap-1 items-center text-green-500">
          <Check size={20} />
          In stock
        </p>
      </div>

      <button className="w-full py-1 bg-blue-500 text-white rounded-md">
        Add to basket
      </button>
    </div>
  )
}

export default BookCard