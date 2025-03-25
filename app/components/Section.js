"use client";
import { useRef } from "react";
import { useInView } from "./Intersection";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "visible-opacity" : "hidden-opacity"
      } min-h-full px-5 py-3 w-screen justify-center items-center flex snap-start duration-800 scroll-smooth transition-all`}
    >
      {children}
    </div>
  );
};

export default Section;
