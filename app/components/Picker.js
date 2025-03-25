import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import InputColorPicker from "./InputColorPicker";
import Button from "./Button";

export default function Picker({ setOpenColors }) {
  const [colors, setColors] = useState({});

  useEffect(() => {
    setColors({
      background: localStorage.getItem("background") || "#ffffff",
      foreground: localStorage.getItem("foreground") || "#0d0d0d",
      bg: localStorage.getItem("bg") || "#0D0D0D",
      active: localStorage.getItem("active") || "#C4D977",
      strong: localStorage.getItem("strong") || "#1E2159",
      light: localStorage.getItem("light") || "#635EF2",
      medium: localStorage.getItem("medium") || "#252273",
    });
  }, []);

  const handleChange = (color, keyColor) => {
    setColors((prev) => ({ ...prev, [keyColor]: color }));
    document.documentElement.style.setProperty(`--${keyColor}`, color);
    localStorage.setItem(keyColor, color);
  };

  const reset = () => {
    let resetColors = {
      background: "#ffffff",
      foreground: "#0d0d0d",
      bg: "#0D0D0D",
      active: "#C4D977",
      strong: "#1E2159",
      light: "#635EF2",
      medium: "#252273",
    };
    setColors(resetColors);
    Object.keys(resetColors).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, resetColors[key]);
      localStorage.setItem(key, resetColors[key]);
    });
  };

  return (
    <Modal onClose={() => setOpenColors(false)}>
      <div className=" max-w-[70vh] grid grid-cols-2  gap-2 px-3 py-2 overflow-auto max-h-[60vh]">
        <InputColorPicker
          color={colors.background}
          keyColor="background"
          handleChange={handleChange}
          name="Background light"
        />
        <InputColorPicker
          color={colors.foreground}
          keyColor="foreground"
          handleChange={handleChange}
          name="Background dark"
        />
        <InputColorPicker
          color={colors.bg}
          keyColor="bg"
          handleChange={handleChange}
          name="Text"
        />
        <InputColorPicker
          color={colors.active}
          name="Secondary"
          keyColor="active"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.strong}
          keyColor="strong"
          name="Secondary text"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.light}
          keyColor="light"
          name="Titles"
          handleChange={handleChange}
        />
        <InputColorPicker
          color={colors.medium}
          keyColor="medium"
          name="Buttons"
          handleChange={handleChange}
        />
      </div>
      <Button type="primary" onClickFunction={reset} text={"Reset"} />
    </Modal>
  );
}
