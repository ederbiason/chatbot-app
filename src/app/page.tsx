import BookSection from "@/components/BookSection";

export default function Home() {
  return (
    <main className="absolute inset-0 mx-auto px-4 max-w-7xl">
      <div className="flex gap-2 items-end pt-12 pb-7">
        <p className="text-2xl text-blue-600 hover:underline hover:underline-offset-2 hover:text-blue-700">Books to Scrape</p>
        <p className="text-lg text-zinc-500">We love being scraped!</p>
      </div>

      <BookSection />
    </main>
  )
}
