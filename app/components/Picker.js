"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ColorPicker from "./ColorPicker";
import InputColorPicker from "./InputColorPicker";

export default function Picker({ setOpenColors }) {
  const [colors, setColors] = useState({});

  useEffect(() => {
    setColors({
      background: localStorage.getItem("background"),
      foreground: localStorage.getItem("foreground"),
      bg: localStorage.getItem("bg"),
      active: localStorage.getItem("active"),
      strong: localStorage.getItem("strong"),
      light: localStorage.getItem("light"),
      medium: localStorage.getItem("medium"),
    });
  }, []);

  console.log("picker", colors);

  const handleChange = (color, key) => {
    setColors((prev) => ({ ...prev, [key]: color }));
    document.documentElement.style.setProperty(`--${key}`, color);
    localStorage.setItem(key, color);
  };

  return (
    <Modal onClose={() => setOpenColors(false)}>
      <div className="flex max-w-[60vh] flex-wrap gap-2 px-3 py-2 overflow-auto max-h-[60vh]">
        <InputColorPicker
          color={colors.background}
          key="background"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.foreground}
          key="foreground"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.bg}
          key="bg"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.active}
          key="active"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.strong}
          key="strong"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.light}
          key="light"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.medium}
          key="medium"
          handleChange={handleChange}
        />
      </div>
    </Modal>
  );
}
