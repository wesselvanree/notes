import React from "react"

export const Navigation = props => {
  let currentMenuData = globalMenu
  if (props.isHome) {
    currentMenuData = homeMenu
  } else if (props.isArticle) {
    currentMenuData = articleMenu
  }

  const menuElements = []

  for (let i = 0; i < currentMenuData.length; i++) {
    menuElements.push(<li key={i}>{currentMenuData[i].name}</li>)
  }

  return (
    <div className="navigation">
      <div className="navigation--background">
        <div className="color"></div>
        <div className="blur"></div>
      </div>
      <div className="navigation--inner">
        <div className="navigation--main">
          <p>Wessel van Ree</p>
        </div>
        <ul className="navigation--menu">{menuElements}</ul>
      </div>
    </div>
  )
}

const globalMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
]

const homeMenu = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Contact",
    url: "#contact",
  },
]

const articleMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/about",
  },
  {
    name: "Notes",
    url: "/notes",
  },
]
