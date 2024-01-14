import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setMenuVisibility(!isMenuVisible)
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const scrollThreshold = 90

    if (navbarRef.current) {
      if (scrollPosition > scrollThreshold) {
        navbarRef.current.classList.add('bg-black')
      } else {
        navbarRef.current.classList.remove('bg-black')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      (event.target as HTMLElement)?.id !== 'burger'
    ) {
      setMenuVisibility(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  const handleLinkClick = () => {
    setMenuVisibility(false)
  }

  return (
    <nav
      ref={navbarRef}
      className={`text-right fixed top-0 right-0 left-0 z-50 p-4 text-white transition-all duration-300 ease-in-out ${
        isMenuVisible ? 'bg-black' : ''
      }`}
      id="navbar"
    >
      <div className="flex justify-end">
        <div className="md:flex flex-col items-end">
          <div
            className="cursor-pointer md:hidden pb-2"
            id="burger"
            onClick={handleClick}
          >
            {isMenuVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 float-right"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <div
            className={`md:flex md:flex-col md:items-end ${
              isMenuVisible ? 'block' : 'hidden'
            }`}
          >
            <ul className="md:flex text-sm md:text-lg text-white">
              <li className="hover:text-yellow-400">
                <a
                  href="#home"
                  className="px-2 md:px-6 pt-2 md:py-1 flex hover:shadow-sm "
                  onClick={handleLinkClick}
                >
                  <span>Home</span>
                </a>
              </li>
              <li className="hover:text-yellow-400">
                <a
                  href="#about"
                  className="px-2 md:px-6 py-1 md:py-1 flex hover:shadow-sm"
                  onClick={handleLinkClick}
                >
                  <span>About</span>
                </a>
              </li>
              <li className="hover:text-yellow-400">
                <a
                  href="#project"
                  className="px-1 md:px-6 py-1 md:py-1 flex hover:shadow-sm"
                  onClick={handleLinkClick}
                >
                  <span>Portfolio</span>
                </a>
              </li>
              <li className="hover:text-yellow-400">
                <a
                  href="#footer"
                  className="px-1 md:pl-6 md:pr-12 py-1 md:py-1 flex hover:shadow-sm"
                  onClick={handleLinkClick}
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
