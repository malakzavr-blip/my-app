import { TopNav } from "@/components/top-nav"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <TopNav />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8" />
    </div>
  )
}
