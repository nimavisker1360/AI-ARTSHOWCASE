"use client";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const lenis = window.lenis;

    if (lenis) {
      const element = document.getElementById(sectionId);
      if (element) {
        lenis.scrollTo(element, {
          offset: 0,
          immediate: false,
          duration: 1.5,
        });
      }
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-col">
        <div className="navbar-sub-col logo">
          <Link href="/">
            <h3>Algora</h3>
          </Link>
        </div>
        <div className="navbar-sub-col time">
          <p>{time}</p>
        </div>
      </div>
      <div className="navbar-col">
        <div className="navbar-sub-col nav-items">
          <a href="#intro" onClick={(e) => scrollToSection(e, "intro")}>
            <p>The Origins</p>
          </a>
          <a
            href="#case-studies"
            onClick={(e) => scrollToSection(e, "case-studies")}
          >
            <p>Highlights</p>
          </a>
          <a href="#works" onClick={(e) => scrollToSection(e, "works")}>
            <p>Innovations</p>
          </a>
        </div>
        <div className="navbar-sub-col music-toggle">
          <div className="music-toggle-btn">
            <p>on</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
