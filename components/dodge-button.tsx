'use client'

import { useState, useRef, useEffect } from 'react'

interface DodgeButtonProps {
  label?: string
}

export default function DodgeButton({ label = 'NO 🙈' }: DodgeButtonProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const canMoveRef = useRef(true)

  const moveButton = () => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const padding = 20

    const maxX = window.innerWidth - rect.width - padding
    const maxY = window.innerHeight - rect.height - padding

    const newX = Math.random() * maxX
    const newY = Math.random() * maxY

    setPosition({ x: newX, y: newY })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !canMoveRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
      )

      if (distance < 80) {
        canMoveRef.current = false
        moveButton()

        setTimeout(() => {
          canMoveRef.current = true
        }, 500)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <button
      ref={buttonRef}
      onMouseEnter={moveButton}
      className="btn-no"
      style={
        position
          ? {
              position: 'fixed',
              left: `${position.x}px`,
              top: `${position.y}px`,
              zIndex: 50,
              transition: 'left 0.3s ease, top 0.3s ease',
            }
          : {} // normal layout initially
      }
    >
      {label}
    </button>
  )
}
