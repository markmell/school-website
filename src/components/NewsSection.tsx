import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

function NewsSection() {

  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {

    const fetchNews = async () => {

      const newsCollection = collection(db, "news");

      const data = await getDocs(newsCollection);

      setNews(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
      );

    };

    fetchNews();

  }, []);

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          News & Events
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {news.map((item) => (

            <div
              key={item.id}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
            >

              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                className="w-full h-56 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.content}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default NewsSection;