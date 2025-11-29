"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "markets", label: "Markets" },
  { id: "engineering", label: "Engineering" },
]

const articles = [
  {
    id: 1,
    category: "research",
    title: "Understanding Market Microstructure in the Age of High-Frequency Trading",
    excerpt: "An exploration of how modern market structure affects price discovery and liquidity provision.",
    author: "Dr. Elena Rodriguez",
    date: "2024-01-15",
    readTime: "12 min read",
  },
  {
    id: 2,
    category: "markets",
    title: "Cross-Asset Correlations During Market Stress",
    excerpt:
      "How correlation structures change during periods of market volatility and implications for portfolio construction.",
    author: "Michael Okonkwo",
    date: "2024-01-08",
    readTime: "8 min read",
  },
  {
    id: 3,
    category: "engineering",
    title: "Building Resilient Trading Infrastructure at Scale",
    excerpt: "Technical deep-dive into our approach to building fault-tolerant, low-latency trading systems.",
    author: "James Park",
    date: "2024-01-02",
    readTime: "15 min read",
  },
  {
    id: 4,
    category: "research",
    title: "Machine Learning for Factor Discovery",
    excerpt: "How we use modern ML techniques to identify novel risk factors in equity markets.",
    author: "Dr. Aisha Patel",
    date: "2023-12-18",
    readTime: "10 min read",
  },
  {
    id: 5,
    category: "markets",
    title: "The Evolution of Fixed Income Markets",
    excerpt: "Analyzing structural changes in bond markets and opportunities for systematic strategies.",
    author: "David Liu",
    date: "2023-12-10",
    readTime: "9 min read",
  },
  {
    id: 6,
    category: "engineering",
    title: "Real-Time Risk Management Systems",
    excerpt: "Architecture patterns for building risk systems that scale to millions of positions.",
    author: "James Park",
    date: "2023-12-01",
    readTime: "14 min read",
  },
]

export function ArticlesList() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredArticles =
    activeCategory === "all" ? articles : articles.filter((article) => article.category === activeCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-12 pb-24 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Category filters */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Articles list */}
        <div className="space-y-6">
          {filteredArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 50}>
              <Card className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      {/* Category tag */}
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-md mb-3">
                        {article.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-3 text-muted-foreground leading-relaxed">{article.excerpt}</p>

                      {/* Meta */}
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <span>{article.author}</span>
                        <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                        <span>{formatDate(article.date)}</span>
                        <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
