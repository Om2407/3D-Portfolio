"use client";
import React, { memo, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  initialLetterIcon,
  navLinks,
  remainingLetters,
  socialLinks,
} from "@/constants/constants";
import { styles } from "@/styles";
import { menu, close } from "@/assets";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Navbar = memo(function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = useCallback(() => {
    setActive("");
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleDesktopNavClick = useCallback(
    (e, nav) => {
      e.preventDefault();
      setActive(nav.title);
      scrollToSection(nav.id);
    },
    [scrollToSection]
  );

  const handleMobileNavClick = useCallback(
    (e, nav) => {
      e.preventDefault();
      setActive(nav.title);
      setToggle(false);
      scrollToSection(nav.id);
    },
    [scrollToSection]
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary">
            <span className="text-white font-bold text-lg">
              {initialLetterIcon}
            </span>
          </div>
          <p className="text-white text-[29px] font-bold cursor-pointer relative right-2">
            {remainingLetters}
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
            >
              <a
                href={`#${nav.id}`}
                onClick={(e) => handleDesktopNavClick(e, nav)}
              >
                {nav.title}
              </a>
            </li>
          ))}

          {/* Divider */}
          <li className="h-5 w-[1px] bg-secondary opacity-40" />

          {/* GitHub */}
          <li>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
          </li>

          {/* Resume */}
          <li>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-primary text-[13px] font-semibold
                         px-4 py-1.5 rounded-full hover:bg-secondary hover:text-white
                         transition-all duration-200"
            >
              <HiDownload size={15} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={handleToggle}
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="bg-transparent border-none cursor-pointer p-1"
          >
            <Image
              src={toggle ? close : menu}
              alt={toggle ? "close menu" : "open menu"}
              width={28}
              height={28}
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          {/* Mobile Dropdown */}
          {toggle && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-200 ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  >
                    <a
                      href={`#${nav.id}`}
                      onClick={(e) => handleMobileNavClick(e, nav)}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}

                {/* Mobile Divider */}
                <li className="w-full h-[1px] bg-secondary opacity-30" />

                {/* Mobile GitHub */}
                <li>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-white
                               transition-colors duration-200 text-[15px] font-medium"
                    onClick={() => setToggle(false)}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                </li>

                {/* Mobile LinkedIn */}
                <li>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-white
                               transition-colors duration-200 text-[15px] font-medium"
                    onClick={() => setToggle(false)}
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </li>

                {/* Mobile Resume */}
                <li>
                  <a
                    href={socialLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-primary text-[14px]
                               font-semibold px-4 py-2 rounded-full hover:bg-secondary
                               hover:text-white transition-all duration-200"
                    onClick={() => setToggle(false)}
                  >
                    <HiDownload size={15} />
                    Resume
                  </a>
                </li>

              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
});

export default Navbar;