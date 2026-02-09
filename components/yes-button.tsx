'use client'

interface YesButtonProps {
  onClick: () => void
}

export default function YesButton({ onClick }: YesButtonProps) {
  return (
    <button onClick={onClick} className="btn-yes">
      YES 💕
    </button>
  )
}
