"use client";

import { useState } from "react";
import ScrambleText from "./ScrambleText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.setAttribute('data-lenis-prevent', '');
    } else {
      document.documentElement.removeAttribute('data-lenis-prevent');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.documentElement.removeAttribute('data-lenis-prevent');
  };

  const links = [
    { name: "HOME", href: "#home" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "MILESTONES", href: "#milestones" },
    { name: "OUR TEAM", href: "#team" },
    { name: "TESTIMONIES", href: "#testimonies" },
    { name: "CLIENT PORTAL", href: "#portal" },
    { name: "PRICE LIST", href: "#pricing" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      <div className={`menu-overlay ${isOpen ? "is-active" : ""}`}>
        <div className="menu-links">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="menu-link" 
              onClick={closeMenu}
            >
              <ScrambleText text={link.name} triggerOnHover />
            </a>
          ))}
        </div>
        <div className="menu-footer mono">
          NUHA & ASSOCIATES — ADVOCATES & SOLICITORS
        </div>
      </div>

      <nav className="navigation">
        <div className="nav-branding">
          <ScrambleText text="nuhaassociateslaw" displayOverride="NUHA" animateOnMount />
        </div>
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="cross-line cross-1"></span>
          <span className="cross-line cross-2"></span>
        </button>
      </nav>
    </>
  );
}
