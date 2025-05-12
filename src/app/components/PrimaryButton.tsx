"use client";
import React from "react";
import clsx from "clsx";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  isLoading = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        "px-5 py-2 rounded-md font-semibold text-white bg-color-secondary hover:bg-gray-600 transition duration-200 disabled:opacity-50 cursor-pointer",
        className
      )}
    >
      {isLoading?"": children}
    </button>
  );
};

export default PrimaryButton;
