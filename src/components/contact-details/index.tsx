"use client";
import React from "react";
import Heading from "../heading";
import { MdPhoneCallback } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const ContactDetails = () => {
  const handleCallVendor = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleMailOwner = () => {
    const email = "holidayplannertravel@gmail.com";
    const subject = encodeURIComponent("Inquiry About Holiday planner");
    const body = encodeURIComponent(
      "Hello,\n\nI got to know about Holiday Planner, I'm interested to know more about services.\n\nThank you!",
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="p-5 bg-cover bg-no-repeat bg-bg-elevated relative z-[2]">
      <Heading textOne="Contact" textTwo="Details" />
      <address className="not-italic">
        <h3 className="text-base font-medium text-text-secondary mb-2.5">
          Address: Plot number 1692, Rath Rode, Old town, Bhubaneswar, Odisha
          751009
        </h3>
        <div className="flex items-center justify-start text-base gap-2.5 font-medium text-text-secondary mb-1.5">
          <MdPhoneCallback />
          <p
            className="text-gold-400 font-semibold underline cursor-pointer"
            onClick={() => handleCallVendor("8249262728")}
          >
            +918249262728
          </p>
          <p
            className="text-gold-400 font-semibold underline cursor-pointer"
            onClick={() => handleCallVendor("7008345662")}
          >
            +917008345662
          </p>
        </div>
        <div
          className="flex items-center justify-start text-base gap-2.5 font-medium text-text-secondary mb-1.5 cursor-pointer"
          onClick={handleMailOwner}
        >
          <IoIosMail />
          <p className="text-gold-400 font-semibold underline">
            holidayplannertravel@gmail.com
          </p>
        </div>
      </address>

      <h3 className="text-center font-medium text-text-secondary text-sm pt-5">
        © {new Date().getFullYear()} All Rights Reserved. Designed and Developed
        by{" "}
        <a
          href="https://abinashshasini.vercel.app/"
          className="italic font-semibold text-gold-400 hover:text-gold-300 transition-colors"
        >
          Abinash Shasini
        </a>
      </h3>
      <div className="py-5 flex justify-center items-center text-sm font-medium text-text-secondary gap-8 underline">
        <p>Booking Policy</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default ContactDetails;
