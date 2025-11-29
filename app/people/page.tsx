import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PeopleHero } from "@/components/people/people-hero"
import { LeadershipTeam } from "@/components/people/leadership-team"
import { TeamCulture } from "@/components/people/team-culture"

export const metadata = {
  title: "People | Young Turtle",
  description: "World-class researchers and engineers united by intellectual curiosity.",
}

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary to-primary/10">
      <Navbar />
      <main>
        <PeopleHero />
        <LeadershipTeam />
        <TeamCulture />
      </main>
      <Footer />
    </div>
  )
}
