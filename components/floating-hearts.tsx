'use client'

import { useEffect, useState } from 'react'

const HEART_CHARS = ['💕', '💗', '💖', '💘', '❤️', '🩷', '💝']

interface FloatingHeart {
  id: number
  left: number
  char: string
  duration: number
  delay: number
  size: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      duration: 8 + Math.random() * 6, // slower = more magical
      delay: Math.random() * 10,
      size: 18 + Math.random() * 28,
    }))

    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            bottom: '-40px', // start below screen
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  )
}
