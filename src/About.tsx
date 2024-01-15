import React from 'react'

function About() {
  return (
    <section className="min-h-screen max-h-full bg-white" id="about">
      <img
        className="profile-image"
        src="./myAvatar (1).svg"
        alt="profile-image"
      />
      <h1 className="font-bold md:text-2xl mt-2 font-body">
        Hi, you can call me Will!
      </h1>
      <br />
      <h2 className="text-2xl md:text-4xl text-center font-bold leading-7 max-w-screen-md">
        Empowering positive change through code and technology.
      </h2>
      <div className="text-center my-6 mx-0">
        <p className="my-0 mx-auto text-sm md:text-lg leading-5 max-w-screen-md">
          I've been on quite the journey -- started off in the seminary, taught
          for a good chunk in the Philippines, and then made the jump to New
          Zealand for the thrill of the tech world.
        </p>
        <br />
        <p className="my-0 mx-auto text-sm md:text-lg leading-5 max-w-screen-md">
          Spent 17 intense weeks at Dev Academy, and guess what? Coding turned
          out to be the perfect match for my love of learning. Now, I'm on the
          hunt for a software developer role, itching to use my unique journey
          and skills to spice up some innovative projects. Let's craft the
          future, one line of code at a time! 💻🚀
        </p>
      </div>
    </section>
  )
}

export default About
