import { useState } from "react";

function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programs = [
    {
      title: "Bachelor of Science in Agriculture",
      desc: "Agriculture program",
      fullDesc:
      "This program focuses on crop production, animal science, soil management, and modern agricultural technologies.",
    },

    {
      title: "Bachelor of Elementary Education",
      desc: "BEED",
      fullDesc:
      "The Bachelor of Elementary Education (BEEd) program is a four-year undergraduate degree program designed to prepare students for teaching elementary school students (Grades 1-6). The program focuses on developing competent teachers specializing in elementary education content and pedagogy, equipping them with the necessary knowledge and skills to effectively teach the elementary subjects in the K-12 curriculum. ",
    },

    {
      title: "Bachelor of Secondary Education",
      desc: "BS Agriculture",
      fullDesc:
      "The Bachelor of Secondary Education (BSEd) program is a four-year teacher education program designed to prepare students for teaching in high schools. It equips students with both theoretical knowledge and practical skills necessary for effective teaching, focusing on subject matter expertise and pedagogical approaches. UEPPRMC offers BSEd programs with various specializations, including English, Mathematics, and Filipino. ",
    },
    {
      title: "Bachelor of Science in Criminology",
      desc: "BS Crim",
      fullDesc:
      "The field of criminology is the study of crime and the various agencies of justice as they operate and react to crime, criminals and victims. It is therefore the mission of the Criminology program to provide the community with professionally competent and morally upright graduates who can deliver efficient and effective services in crime prevention, crime detection and investigation, law enforcement, public safety, custody and rehabilitation of offenders, criminological research, among others. Higher Education Institutions (HEIS) offering the Criminology program are envisioned as significant educational institutions actively and continually involved in producing graduates who have the knowledge, skills, attitude and values in addressing the problem of criminality in the country and the character and competence to meet the challenges of globalization in the field of criminology.",
    },

    {
      title: "Bachelor of Science in Hospitality Managemen",
      desc: "BSHM",
      fullDesc:
      "The programs related to the fields of hospitality and tourism education will equip students with competencies that are needed to execute operational tasks and management functions in food production (culinary), accommodation, food and beverage service, tourism planning and product development, events planning, transportation services, travel and tour operations and other emerging sectors of hospitality and tourism industry.",
    },

    {
      title: "Bachelor of Science in Industrial Technology",
     desc: "BIndTech",
      fullDesc:
      "The Bachelor of Industrial Technology program is intended to prepare students for a professional career in Industrial Technology. It shall impart a body of knowledge, skills, attitudes, values, and experiences that will provide prospective industrial workers with the necessary competencies for effective and efficient production and manufacturing technologists and research functions.",
    },

  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-5xl font-bold text-center text-blue-800 mb-14">
        Academic Programs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-yellow-50 border border-yellow-200 rounded-3xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl mb-5">
              🎓
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {program.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {program.desc}
            </p>

            <button
              onClick={() => setSelectedProgram(program)}
              className="mt-6 bg-blue-700 hover:bg-blue-900 text-white px-5 py-2 rounded-xl transition duration-300"
              >
                Learn More
            </button>


          </div>
        ))}
      </div>

        {selectedProgram && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={() => setSelectedProgram(null)}
  >
    <div
      className="bg-white rounded-3xl p-8 max-w-lg w-[90%] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        {selectedProgram.title}
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {selectedProgram.fullDesc}
      </p>

      <button
        onClick={() => setSelectedProgram(null)}
        className="mt-6 bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
      >
        Close
      </button>
    </div>
  </div>
)}





    </section>
  );
}

export default ProgramsSection;
