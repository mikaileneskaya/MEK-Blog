"use client";
import { useEffect } from "react";

export default function Circle2() {

  useEffect(() => {
    const handleClick = (e) => {
      const circle2 = document.createElement("div");
      circle2.className = "circle2";
      circle2.style.left = e.pageX + "px";
      circle2.style.top = e.pageY + "px";
      document.body.appendChild(circle2);

      setTimeout(() => {
        circle2.style.transform = "scale(10)";
        circle2.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        document.body.removeChild(circle2);
      }, 500);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
