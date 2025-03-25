"use client";
import React, { useState } from "react";
import Picker from "./Picker";

export default function Navbar() {
  const [openColors, setOpenColors] = useState(false);
  return (
    <div className="w-full flex justify-center items-center  h-16 bg-[--active]">
      <button className="text-[--strong]" onClick={() => setOpenColors(true)}>
        Theme
      </button>
      {openColors && <Picker setOpenColors={setOpenColors} />}
    </div>
  );
}
