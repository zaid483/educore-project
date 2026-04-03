import React from "react";
import { motion } from "framer-motion";

export default function UILandingPage() {
  const images = Array.from(
    { length: 12 },
    (_, i) => `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
  );

  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
          Community
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Connect with designers <br /> from 150+ countries
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          It’s your gateway to a career in design. Gain the skills, confidence,
          and portfolio to stand out.
        </p>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow mb-12 hover:bg-purple-700 transition">
          Join community
        </button>

        {/* Marquee Rows */}
        <div className="space-y-4 overflow-hidden">
          {/* Row 1 */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="flex w-[200%] gap-4"
          >
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </motion.div>

          {/* Row 2 (reverse) */}
          <motion.div
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
            className="flex w-[200%] gap-4"
          >
            {[...images.reverse(), ...images.reverse()].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
