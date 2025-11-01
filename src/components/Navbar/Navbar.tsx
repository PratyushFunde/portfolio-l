import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ContactMeBtn from "../ContactmeBtn/ContactMeBtn";
import { NavLink } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggle = () => setIsOpen(!isOpen);

  // 🧭 Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🪄 Smooth scrolling behavior for internal links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar__brand}>Pratyush</div>

        <ul className={`${styles.navbar__links} ${isOpen ? styles.menu : ""}`}>
          <li>{isOpen && <IoMdClose onClick={toggle} style={{ fontSize: "1.7rem" }} />}</li>

          <li className={styles.navbar__item}>
            <a
              // to="#home"
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className={activeSection === "home" ? styles.active : ""}
            //   className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </a>
          </li>

          <li className={styles.navbar__item}>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className={activeSection === "about" ? styles.active : ""}
            >
              About
            </a>
          </li>

          <li className={styles.navbar__item}>
            <a
              href="#getInTouch"
              //   className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className={activeSection === "getInTouch" ? styles.active : ""}
            >
              Projects
            </a>
          </li>

          <li className={styles.navbar__item}>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className={activeSection === "services" ? styles.active : ""}
            >
              Services
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a
              href="#getInTouch"
              onClick={(e) => handleSmoothScroll(e, "getInTouch")}
              className={activeSection === "getInTouch" ? styles.active : ""}
            >
              Get In Touch
            </a>
          </li>

          <li className={styles.navbar__item}>
            <a
              href="#resume"
            //   className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Resume
            </a>
          </li>
        </ul>

        <div className={styles.navbar__actions}>
          <ContactMeBtn />
        </div>

        <div className={styles.bar_icon} onClick={toggle}>
          {!isOpen && <HiBars3CenterLeft style={{ fontSize: "1.7rem" }} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
