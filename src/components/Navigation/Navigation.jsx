import { useState } from 'react'
import "./navigation.css";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav className="navigation-menu">
          <a className="link" target="new" href="https://www.linkedin.com/in/dawid-markieton-1948391b8/"> Connect with me on LinkedIn </a>
          <a className="link" target="new" href="https://github.com/greenMakaroni"> Follow me on GitHub </a>
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