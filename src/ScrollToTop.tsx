import React, { useEffect, useState } from 'react'

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    // Adjust the scroll threshold as needed
    const scrollThreshold = 200
    const currentScroll = window.scrollY

    setIsVisible(currentScroll > scrollThreshold)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isVisible ? (
    <div
      className="scroll-to-top-arrow fixed bottom-4 right-4 text-white w-6 h-8 text-center bg-black cursor-pointer"
      onClick={scrollToTop}
    >
      ↑
    </div>
  ) : null
}

export default ScrollToTopArrow
