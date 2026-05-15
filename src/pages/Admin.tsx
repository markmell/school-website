import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "123456"
    ) {

      localStorage.setItem("admin", "true");

      navigate("/admin");

    } else {

      alert("Wrong credentials");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-yellow-50">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-4 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>

  );

}
