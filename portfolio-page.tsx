"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("games")
  const [menuOpen, setMenuOpen] = useState(false)

  // Create explosion effect on click - optimized for performance
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const explosion = document.createElement("div")
      explosion.classList.add("explosion")
      explosion.style.left = `${e.clientX - 50}px`
      explosion.style.top = `${e.clientY - 50}px`

      document.body.appendChild(explosion)

      // Trigger animation
      requestAnimationFrame(() => {
        explosion.style.transform = "scale(3)"
        explosion.style.opacity = "1"
      })

      // Remove after animation completes
      setTimeout(() => {
        explosion.style.opacity = "0"
        setTimeout(() => {
          document.body.removeChild(explosion)
        }, 500)
      }, 300)
    }

    document.addEventListener("click", handleClick)

    // Create fewer menacing symbols for better performance
    const menacingInterval = setInterval(createMenacingSymbol, 3000)

    return () => {
      document.removeEventListener("click", handleClick)
      clearInterval(menacingInterval)
    }
  }, [])

  const createMenacingSymbol = () => {
    const symbol = document.createElement("div")
    symbol.textContent = "ゴ"
    symbol.style.position = "fixed"
    symbol.style.color = "rgba(255, 215, 0, 0.45)"
    symbol.style.fontSize = `${Math.random() * 50 + 30}px`
    symbol.style.left = `${Math.random() * 100}vw`
    symbol.style.top = `${Math.random() * 100}vh`
    symbol.style.transform = `rotate(${Math.random() * 20 - 10}deg)`
    symbol.style.zIndex = "-1"
    symbol.style.pointerEvents = "none"
    symbol.style.opacity = "0"
    symbol.style.transition = "opacity 1s"
    symbol.style.textShadow =
      "0 0 15px rgba(255, 105, 180, 0.8), 0 0 30px rgba(255, 215, 0, 0.7), 0 0 45px rgba(128, 0, 128, 0.6)"

    document.body.appendChild(symbol)

    setTimeout(() => {
      symbol.style.opacity = "1"
    }, 100)

    setTimeout(
      () => {
        symbol.style.opacity = "0"
        setTimeout(() => {
          document.body.removeChild(symbol)
        }, 1000)
      },
      3000 + Math.random() * 2000,
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Menacing Background - More visible but doesn't overlap text - reduced number for performance */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-[150px] text-yellow-400/45 animate-float"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
              animationDelay: `${i * 3}s`,
              textShadow:
                "0 0 15px rgba(255, 105, 180, 0.7), 0 0 30px rgba(255, 215, 0, 0.6), 0 0 45px rgba(128, 0, 128, 0.5)",
              transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`,
            }}
          >
            ゴゴゴ
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-purple-900 to-pink-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center relative z-20">
            <div className="text-2xl font-bold text-yellow-400 transform -skew-x-5 tracking-wider shadow-text">
              KUSHAL K. SHETTY
              <span className="inline-block text-2xl animate-menacing mx-1">ゴ</span>
            </div>

            <div className="hidden md:flex gap-8">
              {["Home", "About", "Interests", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-bold uppercase relative hover:text-yellow-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden py-4 flex flex-col gap-4 items-center">
              {["Home", "About", "Interests", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-bold uppercase relative hover:text-yellow-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black/90 to-purple-900/30"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 tracking-wider transform -skew-x-3 shadow-text-lg">
            KUSHAL K. SHETTY
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8 uppercase tracking-wide">Student at FR CRCE</h2>
          <div className="mb-8 text-pink-400 text-xl italic animate-pulse">"I just want a quiet life..."</div>
          <a
            href="#interests"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold uppercase rounded shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            View My Interests
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16 uppercase relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <Image
                  src="/main_pfp.jpg"
                  alt="Kushal K. Shetty"
                  width={400}
                  height={400}
                  className="rounded-lg border-4 border-purple-600 shadow-xl transform -rotate-3 transition-transform hover:rotate-0 hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl animate-pulse">
                  !?
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                Hello there! I'm Kushal K. Shetty, a student at FR CRCE pursuing my education with passion and
                dedication. Much like Kira Yoshikage, I prefer a balanced lifestyle - though mine involves coding and
                gaming rather than, well, other hobbies.
              </p>
              <p className="text-lg mb-4">
                I have a deep interest in technology, gaming, and anime. My approach to problems combines analytical
                thinking with creative solutions. I'm constantly developing my skills to reach my full potential.
              </p>
              <p className="text-lg mb-8">
                My favorite Pokémon is{" "}
                <a
                  href="https://pokemondb.net/pokedex/garchomp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-pink-400 font-bold inline-flex items-center"
                >
                  Garchomp <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                , the Mach Pokémon. I admire its incredible speed and power, making it one of the most formidable
                Dragon-types in the franchise.
              </p>

              <div className="bg-purple-900/30 p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">My Professional Stats</h3>

                <div className="space-y-4">
                  {[
                    { label: "Creativity", value: 90 },
                    { label: "Technical Skills", value: 85 },
                    { label: "Problem Solving", value: 95 },
                    { label: "Gaming", value: 88 },
                    { label: "Anime Knowledge", value: 92 },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-yellow-400">{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-500"
                          style={{ width: `${stat.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="relative z-10 py-20 bg-gradient-to-b from-black/90 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16 uppercase relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500">
            My Interests
          </h2>

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md overflow-hidden">
              <button
                className={`px-6 py-3 font-bold ${activeTab === "games" ? "bg-purple-600 text-white" : "bg-purple-900/40 text-gray-300"}`}
                onClick={() => setActiveTab("games")}
              >
                Games
              </button>
              <button
                className={`px-6 py-3 font-bold ${activeTab === "anime" ? "bg-purple-600 text-white" : "bg-purple-900/40 text-gray-300"}`}
                onClick={() => setActiveTab("anime")}
              >
                Anime & Manga
              </button>
            </div>
          </div>

          {activeTab === "games" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Hollow Knight",
                  category: "My Favorite Game",
                  description:
                    "A hauntingly beautiful metroidvania with exceptional art style, challenging gameplay, and deep lore.",
                  image: "/Hollow_Knight_first_cover_art.webp.png",
                },
                {
                  title: "Sekiro: Shadows Die Twice",
                  category: "Action-Adventure",
                  description: "A challenging FromSoftware game set in feudal Japan with precise combat mechanics.",
                  image: "/Sekiro_art.jpg",
                },
                {
                  title: "Dark Souls 3",
                  category: "Action RPG",
                  description:
                    "The epic conclusion to the Dark Souls trilogy with punishing gameplay and atmospheric world design.",
                  image: "/images.jpeg",
                },
                {
                  title: "Pokémon",
                  category: "RPG Franchise",
                  description: "Beloved monster-collecting RPG series where you catch, train and battle with Pokémon.",
                  image: "/pokemon.jpeg",
                },
                {
                  title: "Lies of P",
                  category: "Soulslike",
                  description: "A dark retelling of Pinocchio in a soulslike format with unique puppet mechanics.",
                  image: "/Lies_of_p_cover_art.jpg",
                },
                {
                  title: "Elden Ring",
                  category: "Open-World RPG",
                  description:
                    "FromSoftware's vast open world masterpiece featuring a rich mythology created with George R.R. Martin.",
                  image: "/eldenring.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border-3 border-purple-600 transition-all hover:border-yellow-400 bg-black/70 rounded-lg"
                >
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-pink-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-yellow-400 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                      {item.category}
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "anime" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "JoJo's Bizarre Adventure",
                  category: "Action, Adventure",
                  description:
                    "Multigenerational story of the Joestar family and their battles against supernatural foes using unique abilities.",
                  image: "/jojo.jpg",
                },
                {
                  title: "The Disastrous Life of Saiki K",
                  category: "Comedy, Supernatural",
                  description:
                    "Hilarious comedy about a psychic teenager who just wants to live a normal life despite his extraordinary powers.",
                  image: "/saikik.jpg",
                },
                {
                  title: "Homunculus",
                  category: "Psychological, Seinen",
                  description:
                    "Dark psychological manga exploring the human psyche through trepanation and disturbing visualizations.",
                  image: "/Homonculus.webp",
                },
                {
                  title: "The Climber",
                  category: "Sports, Seinen",
                  description:
                    "A thought-provoking manga about a man's relentless pursuit of the pinnacle of climbing excellence.",
                  image: "/theclimber.webp",
                },
                {
                  title: "Berserk",
                  category: "Dark Fantasy, Seinen",
                  description:
                    "Epic dark fantasy following Guts, a lone mercenary on a journey of revenge in a medieval-inspired world.",
                  image: "/berserk.webp",
                },
                {
                  title: "One Piece",
                  category: "Adventure, Fantasy",
                  description:
                    "Epic adventure of Monkey D. Luffy and his crew as they search for the ultimate treasure, the One Piece.",
                  image: "/One_Piece,_Volume_61_Cover_(Japanese).jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border-3 border-purple-600 transition-all hover:border-yellow-400 bg-black/70 rounded-lg"
                >
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={item.image || `/placeholder.svg?height=300&width=400`}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-pink-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-yellow-400 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                      {item.category}
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16 uppercase relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Proficient in HTML, CSS, JavaScript and various frameworks. I turn designs into responsive websites with smooth interactions.",
              },
              {
                title: "Game Analysis",
                description:
                  "Deep understanding of game mechanics, level design principles, and narrative structures in various gaming genres.",
              },
              {
                title: "Anime Critique",
                description:
                  "Analytical approach to storytelling techniques, character development, and thematic elements in anime and manga.",
              },
              {
                title: "Problem Solving",
                description:
                  "Methodical approach to complex challenges with creative solutions and attention to detail.",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/70 to-pink-600/70 p-6 rounded-lg border-l-4 border-yellow-400 transition-transform hover:-translate-y-2 relative overflow-hidden"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">{skill.title}</h3>
                <p className="text-white z-10 relative">{skill.description}</p>
                <div className="absolute bottom-2 right-2 text-5xl text-white/10">ゴ</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-gradient-to-b from-black to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16 uppercase relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500">
            Contact Me
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-1">Email</h3>
                    <p className="text-white">kushalshetty372@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-1">Phone</h3>
                    <p className="text-white">+91 9321383668</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-1">Location</h3>
                    <p className="text-white">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <form className="bg-purple-900/30 p-8 rounded-lg border-2 border-yellow-400 shadow-xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-yellow-400 font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-600 text-white rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-yellow-400 font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-600 text-white rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-yellow-400 font-bold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-600 text-white rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold uppercase rounded shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-8 border-t border-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            {[
              { icon: <Instagram size={20} />, label: "Instagram", url: "https://www.instagram.com/niqthmarx_/" },
              { icon: <Mail size={20} />, label: "Email", url: "mailto:kushalshetty372@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors hover:rotate-12 transform"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400">© 2025 Kushal K. Shetty. All Rights Reserved.</p>
        </div>
      </footer>

      {/* CSS for animations and effects - optimized for performance */}
      <style jsx global>{`
        @keyframes menacing {
          0% { transform: rotate(-5deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.1); }
          100% { transform: rotate(-5deg) scale(1); }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(5deg); }
          25% { transform: translate(10px, -10px) rotate(-5deg); }
          50% { transform: translate(0, 15px) rotate(10deg); }
          75% { transform: translate(-10px, -5px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(5deg); }
        }
        
        .animate-menacing {
          animation: menacing 1s infinite;
        }
        
        .animate-float {
          animation: float 15s infinite linear;
        }
        
        .shadow-text {
          text-shadow: 3px 3px 0 #800080;
        }
        
        .shadow-text-lg {
          text-shadow: 
            3px 3px 0 #800080,
            6px 6px 0 black;
        }
        
        .explosion {
          position: fixed;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,105,180,0.5) 50%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transition: all 0.5s ease-out;
          will-change: transform, opacity;
        }
        
        .menacing-symbol {
          position: absolute;
          color: rgba(255, 215, 0, 0.45);
          text-shadow: 0 0 15px rgba(255, 105, 180, 0.7), 0 0 30px rgba(255, 215, 0, 0.6);
          animation: float 15s infinite linear;
          z-index: -1;
          pointer-events: none;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
