function NewsSection() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          News & Events
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* News 1 */}

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300">

            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              className="w-full h-56 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Enrollment Now Open
              </h3>

              <p className="text-gray-600">
                Admission for SY 2026-2027 is now officially open.
              </p>

            </div>

          </div>

          {/* News 2 */}

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300">

            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              className="w-full h-56 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Research Conference
              </h3>

              <p className="text-gray-600">
                Students participate in the annual research conference.
              </p>

            </div>

          </div>

          {/* News 3 */}

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300">

            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
              className="w-full h-56 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Scholarship Program
              </h3>

              <p className="text-gray-600">
                New scholarship opportunities are available for students.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default NewsSection