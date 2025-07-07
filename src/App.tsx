import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Welcome from './components/Welcome'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import SignupModal from './components/SignupModal'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {showSplash && <Welcome onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="bg-gray-900 text-white overflow-x-hidden">
          {/* Navbar */}
          <nav className="fixed top-0 inset-x-0 z-30 bg-transparent px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
            <button onClick={scrollToTop} className="focus:outline-none">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer select-none">
                Template Header
              </span>
            </button>
            <ul className="flex space-x-8 text-gray-300">
              <li><a href="#features" onClick={e=>{e.preventDefault();scrollToSection('features')}} className="hover:text-white">Features</a></li>
              <li><a href="#pricing"  onClick={e=>{e.preventDefault();scrollToSection('pricing')}}  className="hover:text-white">Pricing</a></li>
              <li><a href="#faq"      onClick={e=>{e.preventDefault();scrollToSection('faq')}}      className="hover:text-white">FAQ</a></li>
              <li>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-black hover:opacity-90 transition"
                  onClick={() => setLoginOpen(true)}
                >
                  Log In
                </button>
              </li>
            </ul>
          </nav>

          {/* Hero */}
          <header className="relative min-h-screen pt-32 pb-32 flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#0f172a,_#111827)]" />
            <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 opacity-30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-24 right-16 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />

            <motion.div
              className="relative z-10 text-center px-4 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-green-900 bg-opacity-20 text-green-400 font-medium text-sm shadow-[0_0_8px_rgba(34,197,94,0.7)]">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
                Pre-orders Live
              </div>

              <h1
                className="
                  font-extrabold
                  text-[clamp(2.5rem,8vw,6rem)]
                  leading-snug
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-green-400 to-blue-500
                  whitespace-normal
                "
              >
                Template Title.
              </h1>

              <p className="mt-6 text-lg text-gray-300">
                Template Description.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-full shadow-lg hover:opacity-90 transition"
                >
                  Template Plans →
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="inline-block px-8 py-3 border border-gray-600 text-gray-200 rounded-full hover:bg-gray-800 transition"
                >
                  Explore Features →
                </button>
              </div>
            </motion.div>
          </header>

          {/* Sections & Footer */}
          <main className="relative z-10">
            <section id="features"><Features /></section>
            <section id="pricing"><Pricing /></section>
            <section id="faq"><FAQ /></section>
          </main>
          <Footer />
        </div>
      )}

      {/* Modals */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignup={() => {
          setLoginOpen(false)
          setSignupOpen(true)
        }}
      />
      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => {
          setSignupOpen(false)
          setLoginOpen(true)
        }}
      />
    </>
  )
}
