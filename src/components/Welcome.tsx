import React, { useEffect, useState } from 'react'

interface WelcomeProps {
  onFinish: () => void
}

export default function Welcome({ onFinish }: WelcomeProps) {
  const fullText = 'Welcome to WebsiteName!'
  const typingSpeed = 100
  const pauseAfterTyping = 500
  const fadeDuration = 500

  const [displayed, setDisplayed] = useState('')
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let idx = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, idx + 1))
      idx++
      if (idx === fullText.length) {
        clearInterval(interval)
        setTimeout(() => setFadeOut(true), pauseAfterTyping)
      }
    }, typingSpeed)

    const totalTime =
      fullText.length * typingSpeed +
      pauseAfterTyping +
      fadeDuration
    const finishTimer = setTimeout(onFinish, totalTime)

    return () => {
      clearInterval(interval)
      clearTimeout(finishTimer)
      document.body.style.overflow = 'auto'
    }
  }, [onFinish])

  return (
    <div
      className={`
        fixed inset-0 bg-gray-900 flex items-center justify-center z-50
        transition-opacity duration-${fadeDuration} ease-out
        ${fadeOut ? 'opacity-0' : 'opacity-100'}
      `}
    >
      <h1
        className={`
          font-extrabold
          text-[clamp(2.5rem,8vw,6rem)]
          leading-snug
          bg-clip-text text-transparent
          bg-gradient-to-r from-green-400 to-blue-500
          whitespace-nowrap
        `}
      >
        {displayed}
        <span className="typing-cursor">|</span>
      </h1>
    </div>
  )
}
