'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  reversed?: boolean
}

export function Logo({ className, reversed = false }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src={reversed ? '/callvox-logo-white.png' : '/callvox-logo-ink.png'}
        alt="Callvox"
        width={599}
        height={134}
        priority
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '160px',
        }}
      />
    </div>
  )
}
