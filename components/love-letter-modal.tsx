'use client'

import { useEffect, useRef } from 'react'

interface LoveLetterModalProps {
  isOpen: boolean
  onClose: () => void
  letter: string
  gifUrl?: string
  musicUrl?: string
}

export default function LoveLetterModal({
  isOpen,
  onClose,
  letter,
  gifUrl,
  musicUrl,
}: LoveLetterModalProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpen && musicUrl) {
      const audio = new Audio(musicUrl)
      audio.loop = true
      audio.volume = 0.4
      audio.play().catch(() => {})
      audioRef.current = audio
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [isOpen, musicUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Letter */}
      <div className="letter-paper relative z-10 max-w-lg w-full rounded-2xl p-8 md:p-10 animate-modal-enter">
        {/* Decorative ribbon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">
          🎀
        </div>

        <h2 className="text-3xl md:text-4xl text-love-deep text-center mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
          For You, My Love 💌
        </h2>

        {/* GIF */}
        {gifUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={gifUrl || "/placeholder.svg"}
              alt="Valentine's GIF"
              className="rounded-xl max-h-48 object-contain shadow-md"
            />
          </div>
        )}

        {/* Letter content */}
        <div className="text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
          {letter}
        </div>

        {/* Close button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="btn-yes text-base"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            I love you too! 💖
          </button>
        </div>
      </div>
    </div>
  )
}
