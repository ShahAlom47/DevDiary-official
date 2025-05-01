"use client";
import { InfinitySpin } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <InfinitySpin
        width="200"
        color="#E60067"
      />
    </div>
  );
}
