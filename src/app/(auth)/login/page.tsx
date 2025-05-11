"use client";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Link from "next/link";
import PrimaryButton from "@/app/components/PrimaryButton";
import SocialLogin from "@/app/components/SocialLogin";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // ekhane backend request pathao or validation koro
  };

  return (
    <div className="max-w flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-color-primary rounded px-8 pt-6 pb-8 mb-4 lg:w-4/12 md:w-6/12 sm:w-9/12 w-11/12 h-fit"
      >
        <h1 className="text-3xl font-semibold text-white text-center mb-6 border-b-2 border-color-secondary pb-2">
          Login
        </h1>

        {/* Login Form */}
        <div className="mb-4 text-white">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-1 rounded-sm focus:outline-none mb-3 border-b border-color-secondary"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-1 rounded-sm focus:outline-none mb-3 border-b border-color-secondary pr-10"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2.5 text-white cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <PrimaryButton className="w-full mb-3 rounded-sm" type="submit">
          Login
        </PrimaryButton>

        {/* Social Login */}
        <SocialLogin></SocialLogin>

        {/* Register & Home Links */}
        <div className="text-center text-sm text-white">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-300 hover:underline">
              Register here
            </Link>
          </p>
          <p>
            <Link href="/" className="text-blue-300 hover:underline">
              Go to Home
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
