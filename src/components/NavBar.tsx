import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 md:px-7 py-2 backdrop-blur-sm bg-white/30 dark:bg-black/70 transition-colors duration-1000 relative">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <img src="/logo.png" alt="logo" width="36" className="md:w-10" />
        <p className="font-bold text-black dark:text-white transition-colors duration-1000 text-[clamp(1rem,2vw,1.25rem)]">
          PULSEFIT
        </p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[clamp(0.75rem,2vw,1.5rem)] text-[clamp(0.875rem,1.5vw,1.125rem)] font-medium text-black dark:text-white transition-colors duration-1000">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Classes</a>
        <a href="#">Membership</a>
        <a href="#">Contact Us</a>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex gap-[clamp(0.5rem,1.5vw,0.75rem)]">
        <button className="rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white px-[clamp(1rem,2vw,1.5rem)] py-2 font-semibold shadow-lg hover:from-pink-500 hover:to-rose-600 dark:from-yellow-400 dark:to-orange-600 dark:hover:from-yellow-500 dark:hover:to-orange-700 transition-transform transform hover:scale-105 duration-500 text-[clamp(0.75rem,1.25vw,1rem)]">
          Join Us
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-full px-3 bg-gray-800 text-white"
        >
          {theme === "dark" ? (
            <MdLightMode size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 bg-gray-800 text-white"
        >
          {theme === "dark" ? (
            <MdLightMode size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-gray-800 text-white rounded-md"
        >
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="backdrop-blur-md  z-100 absolute top-full right-0 w-full bg-white/85 dark:bg-black/95 text-black dark:text-white flex flex-col items-center gap-4 py-4 md:hidden transition-colors duration-1000">
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Classes
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Membership
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
          <button className="rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-2 font-semibold shadow-lg hover:from-pink-500 hover:to-rose-600 dark:from-yellow-400 dark:to-orange-600 dark:hover:from-yellow-500 dark:hover:to-orange-700 transition-transform transform hover:scale-105 duration-500 ">
            Join Us
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
