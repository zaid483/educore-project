import React from "react";
import { motion } from "framer-motion";

export default function Faqcta() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/54.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
  ];

  return (
    <div className="mt-20 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-8 md:p-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Start Your UI/UX Design Journey Today!
            </h2>
            <p className="text-white/80 mb-6">
              Join thousands of aspiring designers and gain the skills to create
              stunning, user-friendly designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100 transition">
                Enroll Now
              </button>
              <button className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition">
                See Curriculum
              </button>
            </div>
          </div>

          <div className="relative h-64 md:h-80">
            {avatars.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.3 }}
                style={{
                  top: `${(i * 20) % 80}%`,
                  left: `${(i * 35) % 90}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
