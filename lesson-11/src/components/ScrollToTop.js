import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <button
      type="button"
      className={`${
        position !== 0 ? "" : "hidden"
      } rounded-full shadow-lg bg-white w-10 h-10 opacity-50 hover:opacity-100`}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      🔝
    </button>
  );
}
