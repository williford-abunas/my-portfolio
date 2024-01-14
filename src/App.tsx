import { useEffect } from 'react'
import './App.css'
import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Project from './Project'
import Footer from './Footer'
import addSmoothScrolling from '../utils/utils'

function App() {
  useEffect(() => {
    addSmoothScrolling()
  }, [])

  return (
    // content wrapper - Home
    <>
      <div
        className="min-h-screen max-h-full bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600"
        id="header-background"
      >
        <header id="home">
          <Navbar />
          <div className="h1-container">
            <h1 className="uppercase text-zinc-100 text-4xl md:text-7xl font-bold px-4 md:ml-20 pt-[20vh] md:pt-[40vh] relative drop-shadow-sm text-center md:text-left">
              Williford Abunas
              <span className=" text-gray-300 text-xl md:text-4xl font-normal block pt-6">
                Full-Stack Web Developer
              </span>
            </h1>
          </div>
          <div
            className="cv-container border-2 mt-12 p-2 md:mr-64 flex justify-center md:w-45 hover:bg-yellow-600 text-white hover:font-bold cursor-pointer w-60 mx-auto"
            aria-roledescription="button"
          >
            <a
              href="/cv.pdf"
              className="button w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-lg md:text-center not-italic">
                Download my CV
              </i>
            </a>
          </div>
          {/* Social Media Links */}
          <ul className="home-social hidden md:block">
            <li>
              <a href="https://github.com/williford-abunas" target="_blank">
                <i className="im im-github" aria-hidden="true"></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/williford-abunas-09ba96115"
                target="_blank"
              >
                <i className="im im-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          <div className="scroll-down-arrow">
            <span className="arrow">
              <a href="#about">
                <span className="text-xs text-gray-200 uppercase">
                  scroll&nbsp;
                </span>
                &#8595;
                <span className="text-xs text-gray-200 uppercase">
                  &nbsp;down
                </span>
              </a>
            </span>
          </div>
        </header>
      </div>
      <About />
      <Project />
      <Footer />
    </>
  )
}

export default App
