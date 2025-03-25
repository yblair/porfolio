"use client";
import React, { useState } from "react";
import Picker from "./Picker";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const [openColors, setOpenColors] = useState(false);
  return (
    <div className="w-full flex justify-end items-center p-2 h-16 ">
      <Button
        type="secondary"
        text="Theme"
        onClickFunction={() => setOpenColors(true)}
      />

      {openColors && <Picker setOpenColors={setOpenColors} />}
      {/*      <LangSwitcher /> */}
    </div>
  );
}
