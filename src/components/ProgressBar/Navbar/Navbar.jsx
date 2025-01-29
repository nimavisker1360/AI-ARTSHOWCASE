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
          <Link href="/">
            <p>The Origins</p>
          </Link>
          <Link href="/">
            <p>Highlights</p>
          </Link>
          <Link href="/">
            <p>Innovations</p>
          </Link>
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
