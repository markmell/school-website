import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabase";

export default function NewsAdmin() {
  const isAdmin = localStorage.getItem("admin");

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  const [news, setNews] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // FETCH NEWS
  const fetchNews = async () => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setNews(data);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // ADD NEWS
  const addNews = async () => {
    if (!title || !content || !image) {
      alert("Please complete all fields");
      return;
    }

    const fileName = `${Date.now()}-${image.name}`;

    // Upload image
    const { error: uploadError } = await supabase.storage
      .from("news-images")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    // Get image URL
    const { data } = supabase.storage
      .from("news-images")
      .getPublicUrl(fileName);

    const image_url = data.publicUrl;

    // Save news
    const { error } = await supabase.from("news").insert([
      {
        title,
        description: content,
        image_url,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("News Added!");

      setTitle("");
      setContent("");
      setImage(null);

      fetchNews();
    }
  };

  // DELETE NEWS
  const deleteNews = async (id: number) => {
    await supabase.from("news").delete().eq("id", id);

    fetchNews();
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("admin");

    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-blue-900">
          News Management
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          Logout
        </button>
      </div>

      {/* ADD NEWS FORM */}
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-3xl mb-12">
        <input
          type="text"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <textarea
          placeholder="News Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5 h-40"
        />

        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
            }
          }}
          className="mb-5"
        />

        <button
          onClick={addNews}
          className="bg-blue-700 text-white px-8 py-4 rounded-xl"
        >
          Add News
        </button>
      </div>

      {/* NEWS LIST */}
      <h2 className="text-4xl font-bold text-black mb-8">
        News List
      </h2>

      <div className="grid gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl shadow-lg"
          >
            <img
              src={item.image_url}
              alt=""
              className="w-full h-60 object-cover rounded-2xl mb-5"
            />

            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-5">
              {item.description}
            </p>

            <button
              onClick={() => deleteNews(item.id)}
              className="bg-red-600 text-white px-5 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}