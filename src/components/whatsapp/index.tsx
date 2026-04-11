"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "@/hooks/useWhatsApp";

const WhatsAppButton = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  return (
    <button
      type="button"
      onClick={() =>
        handleRedirectTheUserToWhatsApp({ messageType: "generic" })
      }
      className="fixed bottom-[150px] right-5 z-[999] flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-gradient-to-b from-[#60d66a] to-[#20b038] h-[53px] w-[53px] rounded-full inline-flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="h-[30px] w-[30px] text-white" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
