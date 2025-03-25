import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  useEffect(() => {
    const background = localStorage.getItem("background");
    const foreground = localStorage.getItem("foreground");
    const bg = localStorage.getItem("bg");
    const active = localStorage.getItem("active");
    const strong = localStorage.getItem("strong");
    const light = localStorage.getItem("light");
    const medium = localStorage.getItem("medium");
    console.log("background", background);
    document.documentElement.style.setProperty(
      "--background",
      background ?? "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      foreground ?? "#0d0d0d"
    );
    document.documentElement.style.setProperty("--bg", bg ?? "#0D0D0D");
    document.documentElement.style.setProperty("--active", active ?? "#C4D977");
    document.documentElement.style.setProperty("--strong", strong ?? "#1E2159");
    document.documentElement.style.setProperty("--light", light ?? "#635EF2");
    document.documentElement.style.setProperty("--medium", medium ?? "#252273");
    localStorage.setItem("background", background ?? "#ffffff");
    localStorage.setItem("foreground", foreground ?? "#0d0d0d");
    localStorage.setItem("bg", bg ?? "#0D0D0D");
    localStorage.setItem("active", active ?? "#C4D977");
    localStorage.setItem("strong", strong ?? "#1E2159");
    localStorage.setItem("light", light ?? "#635EF2");
    localStorage.setItem("medium", medium ?? "#252273");
  }, []);
  return (
    <div className="w-full flex h-screen overflow-hidden flex-col">
      <Navbar />
      {children}
    </div>
  );
}
