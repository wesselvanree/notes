import React from "react"

export const ProjectDisplayHome = props => {
  return (
    <div className="my-work--project">
      <img src="" alt="" srcSet="" />
      <div className="my-work--details">
        <h2>{props.name}</h2>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}
