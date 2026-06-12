import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useAppStore } from '../store/useAppStore'

export function LoadingScreen() {
  const isReady = useAppStore((s) => s.isReady)
  const ref = useRef(null)

  useEffect(() => {
    if (!isReady) return
    gsap.to(ref.current, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      delay: 0.15,
      onComplete: () => {
        if (ref.current) ref.current.style.display = 'none'
      },
    })
  }, [isReady])

  return (
    <div ref={ref} className="loader" aria-hidden={isReady}>
      <div className="loader-inner">
        <div className="loader-mark"><img src="/images/favicon.png" alt="" /></div>
        <div className="loader-bar"><span /></div>
        <p className="loader-text">GJ Builders</p>
      </div>
    </div>
  )
}
