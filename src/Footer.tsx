import React from 'react'
import ScrollToTopArrow from './ScrollToTop'

const Footer = () => {
  let myDate = document.querySelector('#current-date') as HTMLElement

  if (myDate) {
    const d = new Date().getFullYear()
    myDate.innerHTML = d.toString()
  }

  return (
    <footer id="footer">
      <div>
        <p className="text-lg text-center block text-yellow-400 font-bold pt-4 ">
          Say Hello!
        </p>
        <p className="text-[10px] text-white font-semibold text-center">
          0226332514 | abunaswilliford@gmail.com
        </p>
        <div className="social flex justify-center">
          <a href="#" target="_blank" title="LinkedIn">
            <img src="src/assets/linkedin-icon.svg" alt="Linkedin" />
          </a>
          <a href="#" target="_blank" title="Github">
            <img src="src/assets/github-icon.svg" alt="GitHub" />
          </a>
          <a
            href={`mailto: abunaswilliford@gmail.com`}
            target="_blank"
            title="abunaswilliford@gmail.com"
          >
            <img
              src="src/assets/icons8-composing-mail-50 (1).png"
              alt="email-abunaswilliford@gmail.com"
            />
          </a>
        </div>

        <p className="text-center">
          Copyright &copy; Williford "PocoDev" Abunas&nbsp;
          <span className="mb-2" id="current-date"></span>, <br />
          All rights reserved.
        </p>
      </div>
      <ScrollToTopArrow />
    </footer>
  )
}

export default Footer
