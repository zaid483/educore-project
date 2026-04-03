import { Meetdata } from "./Meetdata";
import React from "react";
import { Star } from "lucide-react";
import { img2, img3, img4, img5, img6 } from "../../assets/image";

const logos = [img2, img3, img4, img5, img6];

export default function Instructor() {
  const { title, name, bio, image, stats } = Meetdata;

  return (
    <div className="bg-black text-white py-12 md:py-16" id="instructor">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start px-4 sm:px-6">
        {/* Instructor Image */}
        <img
          src={image}
          alt={name}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl object-cover"
          loading="lazy"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 p-2 md:p-4">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            {title}
          </h2>

          {/* Bio */}
          <p className="text-gray-300 font-medium text-sm sm:text-base md:text-md leading-relaxed whitespace-pre-line">
            {bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Star size={16} className="text-purple-500" />
                <span className="font-semibold">{item.value}</span>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Brands */}
          <div className="overflow-hidden w-full mt-6">
            <h3 className="text-gray-500 font-semibold mb-3 text-sm sm:text-base">
              BRANDS EDUCATED
            </h3>
            <div className="flex animate-marquee gap-4 md:gap-6">
              {[...logos, ...logos].map((log, i) => (
                <img
                  key={i}
                  src={log}
                  alt={`brand-${i}`}
                  className="h-6 sm:h-8 md:h-10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
