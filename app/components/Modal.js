import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <div className="h-screen w-screen top-0 left-0 fixed z-40 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 flex flex-col justify-center items-center rounded-lg">
        <div className="flex flex-row items-center justify-end w-full">
          <button className="p-2" onClick={onClose}>
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
