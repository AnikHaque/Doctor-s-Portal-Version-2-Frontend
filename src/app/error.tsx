"use client";
/* eslint-disable @next/next/no-img-element */
// pages/custom-error.js (or custom-error.tsx)

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component
import { Button } from "antd";

const CustomError = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center justify-center bg-gray-100 px-32 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-server-error-icon-computer-alert-png-image_8245546.png"
          alt="404-2"
          className="w-96 h-96"
        />

        <p className="text-gray-800 mb-12">
          We apologize for the inconvenience. Our server is currently
          experiencing issues. Please try again later.
        </p>

        <Button type="primary"  onClick={handleGoHome}>Go Back to Home</Button>
      </div>
    </div>
  );
};

export default CustomError;
