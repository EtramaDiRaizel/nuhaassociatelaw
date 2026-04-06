"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#expertise" },
    { name: "Practice Areas", href: "#practice" },
    { name: "Milestones", href: "#milestones" },
    { name: "Our Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Client Portal", href: "#portal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className={`menu-overlay ${isOpen ? "menu-overlay--active" : ""}`}>
        <nav className="menu-overlay__links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="menu-overlay__link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="menu-overlay__footer">
          Nuha & Associates — Advocates & Solicitors
        </div>
      </div>

      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#home" className="nav__logo">
          NUHA<span>&</span>ASSOCIATES
        </a>
        <button
          className={`hamburger ${isOpen ? "hamburger--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
