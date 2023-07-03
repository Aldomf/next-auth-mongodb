"use client";

import React, { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.error) return setError(res.error as string);
    if (res?.ok) return router.push("/dashboard/profile");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Signin</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="some@mail.com"
            name="email"
            className="mb-4 p-3 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            name="password"
            className="mb-4 p-3 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
