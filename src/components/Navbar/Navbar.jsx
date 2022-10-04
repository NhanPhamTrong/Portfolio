import { useState } from "react"
import "./Navbar.scss"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const OpenMenu = (e) => {
        setIsOpen(!isOpen)
    }

    const ClickNavLink = () => {
        setIsOpen(false)
    }

    return (
        <nav>
            <h1 className="brand">NP</h1>
            <div className="navbar">
                <button className={isOpen ? "active" : ""} type="button" aria-label="menu-toggler" onClick={OpenMenu}>
                    <span></span>
                    <span></span>
                </button>
                <ul className={isOpen ? "active" : ""}>
                    <li>
                        <a href="#about" onClick={ClickNavLink}>About</a>
                    </li>
                    <li>
                        <a href="#works" onClick={ClickNavLink}>Works</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={ClickNavLink}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}