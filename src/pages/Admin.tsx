function Admin() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-10">
          Admin Panel
        </h1>

        <nav className="space-y-4">
          <a href="#" className="block hover:text-yellow-300">
            Dashboard
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Students
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Teachers
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Courses
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Announcements
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-5xl font-bold text-blue-900 mb-10">
          Dashboard Overview
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800">
              Students
            </h3>

            <p className="text-5xl font-bold mt-4">
              1,250
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800">
              Teachers
            </h3>

            <p className="text-5xl font-bold mt-4">
              75
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800">
              Courses
            </h3>

            <p className="text-5xl font-bold mt-4">
              12
            </p>
          </div>
        </div>

        {/* Announcement */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-blue-900 mb-5">
            Latest Announcement
          </h3>

          <p className="text-gray-700">
            Enrollment for SY 2026-2027 is now open.
          </p>
        </div>

{/* Student Table */}
<div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-3xl font-bold text-blue-900">
      Student Records
    </h3>

    <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
      Add Student
    </button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-blue-100 text-blue-900">
          <th className="p-4 text-left">ID</th>
          <th className="p-4 text-left">Name</th>
          <th className="p-4 text-left">Course</th>
          <th className="p-4 text-left">Year</th>
          <th className="p-4 text-left">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="p-4">2026-001</td>
          <td className="p-4">Juan Dela Cruz</td>
          <td className="p-4">BSIT</td>
          <td className="p-4">3rd Year</td>
          <td className="p-4 text-green-600 font-semibold">
            Active
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-4">2026-002</td>
          <td className="p-4">Maria Santos</td>
          <td className="p-4">BSED</td>
          <td className="p-4">2nd Year</td>
          <td className="p-4 text-green-600 font-semibold">
            Active
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-4">2026-003</td>
          <td className="p-4">Mark Reyes</td>
          <td className="p-4">BSBA</td>
          <td className="p-4">1st Year</td>
          <td className="p-4 text-yellow-600 font-semibold">
            Pending
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



      </main>
    </div>
  )
}

export default Admin