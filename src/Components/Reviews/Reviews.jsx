import React from "react";
import { Reviewsdata } from "./Reviewsdata";
import { img2, img3, img4, img5, img6 } from "../../assets/image";

const logos = [img2, img3, img4, img5, img6];

export default function Reviews() {
  return (
    <div className="bg-gray-100 py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
          Reviews
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Our Alumni work at companies <br />
          like Google, Nike, and Duolingo
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Our alumni of students means everything to us and we’re grateful to
          have placed designers in top companies around the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-[#6241eb] text-white px-6 py-3 rounded-xl shadow  transition">
            Enroll Now
          </button>
          <button className="bg-white px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            See Curriculum
          </button>
        </div>

        <div className="flex animate-marquee gap-4 md:gap-10 ">
          {[...logos, ...logos, ...logos].map((log, i) => (
            <img
              key={i}
              src={log}
              alt={`brand-${i}`}
              className="h-6 sm:h-8 md:h-10 mb-10 mt-5 filter brightness-0 opacity-90 hover:opacity-100 transition "
            />
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {Reviewsdata.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {item.para}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.career}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
