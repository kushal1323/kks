"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function LoadingPage() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prevProgress + 5
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Menacing Background */}
      <div className="menacing-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="menacing-symbol"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 50 + 70}px`,
              opacity: 0.4,
            }}
          >
            ゴ
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen z-10 relative">
          <div className="mb-8 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-purple-500/50 relative">
              <Image src="/main_pfp.jpg" alt="Kushal K. Shetty" width={160} height={160} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-pink-600/30"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl animate-pulse">
              !?
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600">
            KUSHAL&apos;S BIZARRE PORTFOLIO
          </h1>

          <div className="w-64 md:w-80 h-3 bg-gray-800 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-full"
              style={{ width: `${progress}%`, transition: "width 0.2s ease-out" }}
            ></div>
          </div>

          <div className="flex items-center gap-2 text-yellow-400">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-lg">Loading Stand Power... {progress}%</span>
          </div>

          <div className="mt-8 text-center max-w-md px-4">
            <p className="text-pink-400 italic">
              &quot;My name is Kushal K. Shetty. I&apos;m a student at FR CRCE...&quot;
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600">
            STAND POWER ACTIVATED!
          </h1>

          <div className="relative mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-pink-500/50">
              <Image src="/main_pfp.jpg" alt="Kushal K. Shetty" width={192} height={192} className="object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 border-4 border-yellow-400"></div>
          </div>

          <div className="space-y-4 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">KUSHAL K. SHETTY</h2>
            <p className="text-xl text-pink-400">Student at FR CRCE</p>
          </div>

          <Link
            href="/portfolio"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-bold text-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Enter Portfolio
          </Link>
        </div>
      )}
    </div>
  )
}
