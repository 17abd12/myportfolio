import React from "react";

function InfoSection({ id }) {
  return (
    <section
      id={id}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-20 bg-[#1E293B] md:py-20 px-8 text-[#E2E8F0] overflow-hidden"
    >
      <div className=" flex justify-center items-center relative z-10 ">
        <img
          src="/me.jpg"
          alt="Profile"
          className="shadow-object-cover max-w-xs md:max-w-md rounded-3xl md:h-full h-3/5"
        />
      </div>

      <div className="flex flex-col justify-center relative z-10 md:text-lg leading-relaxed">
        <div className="p-6 space-y-6">
          <p className="text-lg text-[#94A3B8]">Hey, It's me</p>
          <h1 className="text-2xl md:text-4xl font-semibold font-sans">
            Abdullah Imran
          </h1>
          <div className="space-y-4 text-[#E2E8F0]">
            <p className="">
              I'm just a Student passionate about technology and
              problem-solving.
            </p>
            <p className="md:flex hidden">
              I am an undergraduate student at NUST with a focus on machine
              learning and AI. I also have experience in FrontEnd Development.
            </p>
            <p className="">
              I am third Year Student currently in SEECS and know a little bit
              of German.
            </p>
            <h1 className="text-2xl text-[#00BFA5] font-semibold">Education</h1>
            <ul className="list-disc list-inside">
              <li>Matric From Kips School</li>
              <li>FSC From KIPS Academy</li>
              <li>Graduation from NUST (Ongoing)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
