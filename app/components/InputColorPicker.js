"use client";
import React, { useState, useRef, useEffect } from "react";
import ColorPickerComponent from "./ColorPicker";

export default function InputColorPicker({
  color,
  keyColor,
  handleChange,
  name,
}) {
  const [openPicker, setOpenPicker] = useState(false);
  const pickerRef = useRef(null);
  const [currentColor, setCurrentColor] = useState(color);

  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpenPicker(false);
      }
    }

    if (openPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPicker]);

  const handleColorChange = (newColor) => {
    setCurrentColor(newColor);
    handleChange(newColor, keyColor);
  };

  return (
    <>
      <div
        className="rounded-md flex px-3 py-2  cursor-pointer"
        onClick={() => setOpenPicker(!openPicker)}
      >
        <div className="bg-[--secondary] rounded-md flex flex-row items-center justify-center gap-x-2">
          <p>{name}</p>
          <div
            className="h-2 w-2 rounded-md"
            style={{ backgroundColor: currentColor }}
          ></div>
        </div>
      </div>
      {openPicker && (
        <div className="z-40 absolute top-0 left-0 flex justify-center items-center w-screen h-screen">
          <div ref={pickerRef}>
            <ColorPickerComponent
              color={currentColor}
              onChange={handleColorChange}
            />
          </div>
        </div>
      )}
    </>
  );
}
