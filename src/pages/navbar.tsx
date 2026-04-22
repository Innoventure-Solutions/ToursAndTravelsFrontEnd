import { useState } from "react";
import wanderLogo from "../assets/wander.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="bg-white w-full h-16 flex items-center justify-between px-4 md:px-10 shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={wanderLogo}
          className="w-12 h-12 md:w-16 md:h-16 mt-2"
          alt="wanderlogo"
        />
        <span className="text-blue-500 font-bold">Wander</span>
        <span className="text-[#4CAF50] font-bold">lux</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollTo("home")}
          className="font-semibold cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer font-semibold rounded-lg"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl mr-4">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <button onClick={() => scrollTo("home")} className="font-semibold">
            Home
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition font-semibold rounded-lg"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
