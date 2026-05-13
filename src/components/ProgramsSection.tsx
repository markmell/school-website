function ProgramsSection() {
  const programs = [
    {
      title: "Bacherlor of Science in Agriculture",
      //desc: "Learn programming, networking, and modern IT solutions.",
    },
    {
      title: "Bachelor of Elementary Education",
      //desc: "Focus on software development and advanced computing.",
    },
    {
      title: "Bachelor of Secondary Education",
      //desc: "Prepare for teaching and educational leadership.",
    },
    {
      title: "Bachelor of Science in Criminology",
      //desc: "Develop skills for high school teaching and mentoring.",
    },

    {
      title: "Bachelor of Science in Hospitality Managemen",
      //desc: "Focus on software development and advanced computing.",
    },

    {
      title: "Bachelor of Science in Industrial Technology",
     // desc: "Focus on software development and advanced computing.",
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

            <button className="mt-6 bg-blue-700 hover:bg-blue-900 text-white px-5 py-2 rounded-xl transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
