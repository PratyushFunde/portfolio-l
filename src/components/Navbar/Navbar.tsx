import React, { useState } from "react";
import styles from "./Navbar.module.css";
import ContactMeBtn from "../ContactmeBtn/ContactMeBtn";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggle = () => setIsOpen(!isOpen);


 
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
              href="#projects"
              onClick={(e) =>{ handleSmoothScroll(e, "projects"),setActiveSection("")}}
              className={activeSection === "projects" ? styles.active : ""}
            >
              Projects
            </a>
          </li>

          {/* If you later add a Services section, give it an id and enable this link. */}
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
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "experience")}
              className={activeSection === "experience" ? styles.active : ""}
            >
              Experience
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
