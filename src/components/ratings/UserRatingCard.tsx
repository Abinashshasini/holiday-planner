"use client";
import React, { FC } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type TProps = {
  name: string;
  message: string;
  rating: string;
  time: string;
  packageInfo?: string;
  index: number;
  spotlight?: boolean;
};

const UserRatingCard: FC<TProps> = ({
  name,
  message,
  rating,
  time,
  packageInfo,
  index,
  spotlight = false,
}) => {
  const colorArray = [
    "#3B82F6",
    "#EF4444",
    "#10B981",
    "#6366F1",
    "#8B5CF6",
    "#14B8A6",
  ];
  const avatarBg = colorArray[index % colorArray.length];
  const numRating = parseFloat(rating);

  if (spotlight) {
    return (
      <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl bg-gold-900 p-7 shadow-[var(--shadow-card-elevated)] transition-all duration-500">
        {/* Soft blob inside card */}
        <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gold-400/20 blur-3xl" />

        {/* Hover glow overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-gold-400/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-1 flex-col gap-5">
          {/* Spotlight label + decorative quote */}
          <div className="flex items-center justify-between">
            <span className="self-start rounded-full bg-gold-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
              Spotlight
            </span>
            <span
              className="-mt-4 select-none text-7xl leading-none text-gold-400/20"
              style={{ fontFamily: "Georgia, serif" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
          </div>

          {/* Headline quote */}
          <h3 className="text-xl font-bold leading-snug italic text-white">
            &ldquo;{message}&rdquo;
          </h3>

          {/* Package info pill */}
          {packageInfo && (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-gold-400/20 px-3 py-1.5 text-xs font-semibold text-gold-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-gold-400">
                Trip
              </span>
              {packageInfo}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Author footer */}
          <div className="flex items-center gap-3 border-t border-gold-400/20 pt-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-[15px] font-bold text-white">
              {name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-white">
                {name}
              </p>
              <p className="mt-1 text-xs text-gray-400">{time}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col gap-5 rounded-3xl border border-gray-100 bg-white/70 p-7 shadow-[var(--shadow-card-rest)] backdrop-blur-xl transition-all duration-500 hover:shadow-[var(--shadow-card-float)]">
      {/* Hover glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-gold-100/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col gap-5">
        {/* Stars */}
        <div
          className="flex items-center gap-0.5"
          aria-label={`${numRating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) =>
            i < numRating ? (
              <FaStar
                key={i}
                size={14}
                aria-hidden="true"
                className="text-amber-400"
              />
            ) : (
              <FaRegStar
                key={i}
                size={14}
                aria-hidden="true"
                className="text-gray-300"
              />
            ),
          )}
        </div>

        {/* Headline quote */}
        <h3 className="text-lg font-bold leading-snug text-text-primary">
          &ldquo;{message}&rdquo;
        </h3>

        {/* Package info */}
        {packageInfo && (
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-gold-400/10 bg-gold-50 px-3 py-1.5 text-xs font-semibold text-text-secondary">
            <span className="text-[10px] font-black uppercase tracking-widest text-gold-400">
              Trip
            </span>
            {packageInfo}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Author footer */}
        <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[15px] font-bold text-white"
            style={{ background: avatarBg }}
          >
            {name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold leading-none text-text-primary">
              {name}
            </p>
            <p className="mt-1 text-xs text-text-muted">{time}</p>
          </div>
          {/* Google icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0 opacity-40"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default UserRatingCard;
