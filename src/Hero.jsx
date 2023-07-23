import React from 'react'
import hero from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            omnis quod quasi odio tempora dolores nobis esse adipisci quo
            officia facilis et vel beatae rem culpa fuga! Earum, libero ipsam.
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="woman with the browser" />
        </div>
      </div>
    </section>
  )
}

export default Hero
