import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticlesHero } from "@/components/articles/articles-hero"
import { ArticlesList } from "@/components/articles/articles-list"

export const metadata = {
  title: "Articles | Young Turtle",
  description: "Insights and perspectives on markets, technology, and strategy.",
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ArticlesHero />
        <ArticlesList />
      </main>
      <Footer />
    </div>
  )
}
