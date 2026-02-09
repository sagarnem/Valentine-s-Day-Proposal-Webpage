'use client'

import { useState } from 'react'
import FloatingHearts from '@/components/floating-hearts'
import YesButton from '@/components/yes-button'
import DodgeButton from '@/components/dodge-button'
import LoveLetterModal from '@/components/love-letter-modal'

const name = process.env.NEXT_PUBLIC_GF_NAME || 'My Love'
const letter =
  process.env.NEXT_PUBLIC_VALENTINE_LETTER ||
  'Every moment with you feels like a dream come true.\nYou make my world brighter, warmer, and more beautiful.\nI love you more than words can say. 💕'
const gifUrl =
  process.env.NEXT_PUBLIC_VALENTINE_GIF ||
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV6OWVkN2xjMnE2OXZtbWJibTd0aW83bWZ1NTRncGoyeHZhYjh1eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlOBZcl7sbGuLnO/giphy.gif'
const musicUrl = process.env.NEXT_PUBLIC_BACKGROUND_MUSIC || ''

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <FloatingHearts />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Big heart */}
        <div className="text-7xl md:text-8xl mb-6 animate-pulse-glow inline-block">
          💖
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Will you be my Valentine,
        </h1>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-primary mb-12 animate-bounce-soft"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          {name}?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <YesButton onClick={() => setShowModal(true)} />

          <DodgeButton label="NO 🙈" />
        </div>

        <p className="mt-12 text-muted-foreground text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          Made with 💗 just for you
        </p>
      </div>

      <LoveLetterModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        letter={letter}
        gifUrl={gifUrl}
        musicUrl={musicUrl}
      />
    </div>
  )
}
