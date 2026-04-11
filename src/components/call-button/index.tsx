"use client";
import React from "react";
import { IoCall } from "react-icons/io5";

const CallButton = () => {
  const handleCallVendor = () => {
    window.location.href = `tel:8249262728`;
  };
  return (
    <button
      type="button"
      onClick={handleCallVendor}
      className="fixed bottom-20 right-5 z-[999] bg-gradient-to-b from-[#707070] to-[#202020] h-[53px] w-[53px] rounded-full inline-flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:scale-110 transition-transform duration-300"
      aria-label="Call us"
    >
      <IoCall className="h-[25px] w-[25px] text-white" />
    </button>
  );
};

export default CallButton;
