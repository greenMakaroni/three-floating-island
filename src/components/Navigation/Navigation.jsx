import { useState } from 'react'
import "./navigation.css";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav className="navigation-menu">
          <p className="navPar"> Dawid Markieton </p>
          <a className="link" target="new" href="https://github.com/greenMakaroni/three-floating-island.git"> LinkedIn </a>
          <a className="link" target="new" href="https://github.com/greenMakaroni"> Github </a>
      </nav>
    )
  }

  return (
    <>
        <div className={ "div-hamburger" } onClick={() => setOpen(!open)}>
            <div className={ open ? "top-close" : "hamburger-top" }></div>
            <div className={ open ? "middle-close" : "hamburger-middle" }></div>
            <div className={ open ? "bottom-close" : "hamburger-bottom" }></div>
        </div>
        { open && <NavigationMenu /> }
    </>

  )
}

export default Navigation