import { useRef, useState } from "react"
import "./Header.scss"
import { useLocation } from "react-router-dom"

export default function Header(){

    const location = useLocation()

    const navigationsRoutes = [
        {href:"/", label:"Home"},
        {href:"/destination", label:"Destination"},
        {href:"/crew", label:"Crew"},
        {href:"/technology", label:"Technology"},
        // {href:"/administration", label:"Administration"},
    ]
    const navigationContainerRef = useRef()
    const [menuClosed, setMenuClosed] = useState(true)

    return(
        <header>
            <div className="container">
                <a href="/">
                    <svg className="logo" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
                    </svg>
                </a>
                <button onClick={() => setMenuClosed(false)} className="phone-open-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>

            <nav ref={navigationContainerRef} className={`navigation-container ${menuClosed ? "closed" : "open"}`}>
                <div className="navigation-layout">
                    <div className="close-menu-layout">
                        <button onClick={() => setMenuClosed(true)} className="close-phone-navigation-button">
                            <svg  width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                <rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9"/>
                                <rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9"/>
                                </g>
                            </svg>    
                        </button>
                    </div>
                    <div className="nav-button-layout">
                        {navigationsRoutes.map((route, index) => (
                            <a key={index} href={route.href} className={location.pathname === route.href ? "selected" : ""}>
                                <span>0{index}</span>
                                {route.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}