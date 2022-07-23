import { useState } from 'react'
import { Link } from 'react-router-dom';

import "./navigation.css";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav className="navigation-menu">
          <Link to="/" className="link" onClick={() => setOpen(!open)} > Home </Link>
          <Link to="/Resume" className="link" onClick={() => setOpen(!open)} > Resume </Link>
          <Link to="/Projects" className="link" onClick={() => setOpen(!open)} > Projects </Link>
          <Link to="/Contact" className="link" onClick={() => setOpen(!open)} > Contact </Link>
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