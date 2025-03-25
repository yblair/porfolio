"use client";
import React, { useState, useRef, useEffect } from "react";
import ColorPicker from "./ColorPicker";

export default function InputColorPicker({ color, key, handleChange }) {
  const [openPicker, setOpenPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpenPicker(false);
      }
    }

    if (openPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openPicker]);

  const handleColorChange = (color) => {
    let keyColor = key;
    handleChange(color, keyColor);
  };

  return (
    <>
      <div
        className="rounded-md bg-[--medium] px-3 py-2 flex items-center justify-between"
        onClick={() => setOpenPicker(!openPicker)}
      >
        <p className="text-[--active]">{color}</p>
        <div
          className="h-2 w-2 rounded-md"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      {openPicker && (
        <div className="z-40 absolute top-0 left-0 flex justify-center items-center w-screen h-screen">
          <div ref={pickerRef}>
            <ColorPicker color={color} onChange={handleColorChange} />
          </div>
        </div>
      )}
    </>
  );
}
