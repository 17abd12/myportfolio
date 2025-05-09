import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function Footer({ id }) {
  return (
    <section className="bg-[#0F172A] text-[#E2E8F0] scroll-mt-20" id={id}>
      <div className="flex justify-center items-end space-x-6 p-8">
        <a
          href="https://github.com/17abd12"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-black transition-colors duration-300"
        >
          <FaGithub size={24} className="md:size-12" />
        </a>
        <a
          href="https://instagram.com/12_abd_17"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} className="md:size-12" />
        </a>
        <a
          href="mailto:abdullahimran1712@gmail.com"
          className=" hover:text-red-500 transition-colors duration-300"
        >
          <GrMail size={24} className="md:size-12" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
