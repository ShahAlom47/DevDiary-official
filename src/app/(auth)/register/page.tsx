"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import PrimaryButton from "@/app/components/PrimaryButton";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Send data to backend
  };

  return (
    <div className="max-w flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-color-primary rounded px-8 pt-6 pb-8 mb-4 lg:w-4/12 md:w-6/12 sm:w-9/12 w-11/12 h-fit"
      >
        <h1 className="text-3xl font-semibold text-white text-center mb-6 border-b-2 border-color-secondary pb-2">
          Register
        </h1>

        {/* Register Form */}
        <div className="mb-4 text-white">
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-1 rounded-sm focus:outline-none mb-3 border-b border-color-secondary"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-1 rounded-sm focus:outline-none mb-3 border-b border-color-secondary"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-1 rounded-sm focus:outline-none mb-3 border-b border-color-secondary"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <PrimaryButton className="w-full mb-3 rounded-sm" type="submit">
          Register
        </PrimaryButton>

        {/* Social Login */}
        <div className="flex gap-4 justify-center mb-4">
          <button type="button" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <FaFacebook size={15} />
          </button>
          <button type="button" className="bg-black text-white p-2 rounded-full hover:bg-gray-800">
            <FaGithub size={15} />
          </button>
          <button type="button" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
            <FaGoogle size={15} />
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center text-sm text-white">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-300 hover:underline">
              Login here
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

export default Register;
