"use client"
import { useEffect, useMemo, useState } from "react"
import CountUp from "react-countup"

const defaultStats = [
  { num: 0, text: "GitHub followers" },
  { num: 0, text: "Public repos" },
  { num: 0, text: "Total forks" },
  { num: 0, text: "Total stars" },
]

const Stats = () => {
  const [stats, setStats] = useState(defaultStats)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setIsLoading(true)
        setError(null)

        const res = await fetch("/api/github-stats")
        const json = await res.json().catch(() => ({}))

        if (!res.ok) {
          throw new Error(json?.error || "Failed to fetch GitHub stats.")
        }

        if (cancelled) return

        setStats([
          { num: json.followers ?? 0, text: "GitHub followers" },
          { num: json.publicRepos ?? 0, text: "Public repos" },
          { num: json.totalForks ?? 0, text: "Total forks" },
          { num: json.totalStars ?? 0, text: "Total stars" },
        ])
      } catch (e) {
        if (cancelled) return
        setError(e?.message || "Something went wrong.")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const cardOpacity = useMemo(
    () => (isLoading ? "opacity-60" : "opacity-100"),
    [isLoading]
  )

  return (
    <section className="pt-16 xl:pt-8 xl:pb-0">
    
    <div className="container mx-auto -mt-20">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return(
            <div key={index} className={`flex flex-1 gap-4 items-center justify-center xl:justify-start ${cardOpacity}`}>
              <CountUp end={item.num} duration={2} delay={0.2} className="text-4xl xl:text-6xl font-extrabold " />
              <p className="max-w-[150px]">{item.text}</p>
            </div>
          )
        })}
      </div>

      {error ? (
        <p className="mt-4 text-center text-sm text-red-400">{error}</p>
      ) : null}
    </div>
    
    </section>
  )
}

export default Stats
