import React from "react";
import { img2, img3, img4, img5, img6 } from "../../assets/image";

const logos = [img2, img3, img4, img5, img6];

export default function LogoMarquee({
  bg = "bg-black",
  textColor = "text-gray-500",
}) {
  return (
    <div className={`${bg} py-10`}>
      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        <h1 className={`${textColor} font-semibold mb-4 text-sm`}>
          FEATURED ON
        </h1>

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-10 px-8 object-contain flex-shrink-0 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
