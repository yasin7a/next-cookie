"use client";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = () => {
    fetch("/server/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then(console.log)
      .catch((error) => console.error("Login error:", error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="card e rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition mb-4"
        >
          Login
        </button>
        <p className="text-gray-500 mt-2">
          Edit <code className="bg-gray-100 px-1 rounded">app/App.jsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-8 text-sm text-gray-400">
        This is a Vite-like component adapted for Next.js
      </p>
    </div>
  );
}

export default App;
