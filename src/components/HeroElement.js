import React from "react"
import image from "../images/home/glass-morphism-min.png"

export const HeroElement = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-background__overlay"></div>
        <img className="hero-background__image" src={image} alt="background" />
        {/* <Img
            className="hero-background__image"
            fluid={data.file.childImageSharp.fluid}
            alt="background image"
            loading="auto"
          /> */}
      </div>
      <div className="hero-content">
        <div className="hero-content__inner">
          <h1>
            I’m Wessel, a web developer from the Netherlands. Helping startups
            and small businesses to succeed on the web.
          </h1>
          <button href="#" className="button-1">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
