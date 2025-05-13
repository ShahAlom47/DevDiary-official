"use client";
// components/SocialLogin.tsx
import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const SocialLogin: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center mb-4">
      <button
        type="button"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
      >
        <FaFacebook size={15} />
      </button>
      <button
        type="button"
        className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
      >
        <FaGithub size={15} />
      </button>
      <button
        type="button"
        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
      >
        <FaGoogle size={15} />
      </button>
    </div>
  );
};

export default SocialLogin;
