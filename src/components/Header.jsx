import React from "react";

function Header() {
  return (
    <div
      className="md:grid md:grid-cols-2 md:gap-6 sticky top-0 z-50"
      style={{ backgroundColor: "#0F172A", color: "#E2E8F0" }}
    >
      <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl text-xl md:m-6 m-2 font-sans">
          Abdullah <span style={{ color: "#00BFA5" }}>Imran</span>
        </h1>
      </div>

      <div className="md:flex hidden items-center justify-end md:gap-10 gap-4 md:pr-6 m-2 pr-2 text-sm md:text-base md:font-medium">
        <a
          href="#about"
          className="hover:text-[#00BFA5] transition-colors duration-200"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="hover:text-[#00BFA5] transition-colors duration-200"
        >
          Skills
        </a>
        <a
          href="#funfacts"
          className="hover:text-[#00BFA5] transition-colors duration-200"
        >
          Fun Facts
        </a>
      </div>
    </div>
  );
}

export default Header;
