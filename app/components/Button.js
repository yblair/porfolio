import React from "react";

export default function Button({ type = "primary", onClickFunction, text }) {
  const buttonPrimary = "bg-[--medium] text-[--active] px-6 py-2 ";
  const buttonSecondary = "bg-[--active] text-[--medium] text-sm px-4 py-1.5 ";
  return (
    <button
      className={`${
        type === "primary" ? buttonPrimary : buttonSecondary
      } rounded-md w-fit`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
