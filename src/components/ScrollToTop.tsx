import { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`animate-bounce fixed bottom-6 right-6 z-50 p-3 rounded-full text-white dark:text-black  
        bg-gradient-to-r from-pink-400 to-rose-500 
        hover:from-pink-500 hover:to-rose-600
        dark:from-yellow-400 dark:to-orange-600 
        dark:hover:from-yellow-500 dark:hover:to-orange-700
        transition-transform transform duration-500 hover:scale-110

        ${isVisible ? "opacity-70" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <HiOutlineArrowUp size={30} />
    </button>
  );
}
