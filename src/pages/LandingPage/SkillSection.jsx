import { SiHtml5 } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";

const SkillSection = ({ id }) => {
  const cards = [
    {
      id: 1,
      title: "Data Science And AI",
      icon: <FaChartBar />,
      description: [
        "Data Visualization and Preprocessing",
        "Supervised and unsupervised Algorithms",
        "FineTuning and MLOPS",
      ],
    },
    {
      id: 2,
      title: "Advance Deep Learning",
      icon: <GiArtificialHive />,
      description: [
        "ComputerVision and CNN Architectures",
        "Remote Sensing",
        "Transfromers and Sequential Models",
      ],
    },
    {
      id: 3,
      title: "FrontEnd Development",
      icon: <SiHtml5 />,
      description: ["ReactJS and NEXTJS", "Tailwind CSS", "Git and Github"],
    },
  ];

  return (
    <section
      id={id}
      className="py-10 text-[#E2E8F0] scroll-mt-20"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="text-center mb-8">
        <h2 className="md:text-4xl text-2xl font-bold text-[#00BFA5]">
          Skills And Expertise
        </h2>
      </div>
      <div className="flex justify-center items-center mb-2">
        <div className="h-1 w-20 bg-[#00BFA5]"></div>
      </div>
      <div className="parent flex-col md:flex-row p-6 flex justify-center md:space-x-10 md:space-y-0 space-y-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card child md:w-1/5 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:text-[#00BFA5] hover:border-[#00BFA5] hover:bg-white border border-transparent"
            style={{ backgroundColor: "#1E293B " }}
          >
            <div className="flex items-center md:justify-start justify-center text-4xl mb-4 hover:text-[#00BFA5]">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <ul className="list-disc list-inside text-sm  space-y-1">
              {card.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
