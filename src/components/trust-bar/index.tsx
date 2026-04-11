"use client";
import { FaStar, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const items = [
  {
    icon: <FaStar />,
    text: (
      <>
        <strong className="text-text-primary font-bold">4.8★</strong> Google
        Rating
      </>
    ),
  },
  {
    icon: <FaCheckCircle />,
    text: (
      <>
        <strong className="text-text-primary font-bold">500+</strong> Happy
        Travelers
      </>
    ),
  },
  { icon: <FaShieldAlt />, text: <>Govt‑Licensed Guides</> },
  {
    icon: <FaCheckCircle />,
    text: (
      <>
        <strong className="text-text-primary font-bold">₹0</strong> Hidden
        Charges
      </>
    ),
  },
  { icon: <FaStar />, text: <>Trusted Since 2016</> },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-bg-base border-b border-gray-200 overflow-hidden">
      <div className="flex items-center justify-center h-[52px] whitespace-nowrap md:justify-center max-md:justify-start max-md:animate-[marquee_22s_linear_infinite] max-md:hover:[animation-play-state:paused]">
        {/* Render twice for seamless CSS marquee */}
        {[0, 1].map((loop) => (
          <div
            key={loop}
            className={`flex items-center ${loop === 1 ? "md:hidden" : ""}`}
            aria-hidden={loop === 1}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-6 max-md:px-[18px]"
              >
                <span className="text-gold-400 text-xs shrink-0">
                  {item.icon}
                </span>
                <span className="font-mono text-[0.72rem] font-medium text-text-muted uppercase tracking-[0.07em] whitespace-nowrap">
                  {item.text}
                </span>
                {i < items.length - 1 && (
                  <span
                    className="inline-block w-px h-4 bg-gray-200 ml-6 max-md:ml-[18px]"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
