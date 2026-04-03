import React from "react";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Enroll now and <br /> become a UI/UX Design Pro!
        </h1>
        <p className="text-gray-500 mb-6 max-w-xl mx-auto">
          Say goodbye to endless Googling and scattered tutorials. In just 30
          days, you'll transform from a beginner
        </p>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto bg-[#6241eb] text-white px-6 py-3 rounded-xl shadow  hover:bg-gray-900  transition">
            Enroll Now
          </button>
          <button className="w-full sm:w-auto bg-white px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            See Curriculum
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Video */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="rounded-xl overflow-hidden mb-4">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-start">
              Live video courses
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-start">
              Interactive, real-time lessons with expert instructors
            </p>
          </div>

          {/* Card 2 - Image + Animated Pointer */}
          <div className="bg-white rounded-2xl shadow p-4 relative overflow-hidden">
            <div className="bg-gray-100 h-48 rounded-xl relative overflow-hidden">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="chat ui"
                className="w-full h-full object-cover"
              />

              {/* Animated labels */}
              <motion.div
                animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-6 left-6 bg-yellow-400 px-3 py-1 rounded-full text-sm shadow"
              >
                Paitry
              </motion.div>

              <motion.div
                animate={{ x: [0, -40, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 right-6 bg-purple-300 px-3 py-1 rounded-full text-sm shadow"
              >
                Randy
              </motion.div>
            </div>
            <h3 className="font-semibold text-lg mt-4 text-start">
              Zero to hero
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-start">
              A complete step-by-step journey designed to take you from beginner
              to advanced.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="h-48 rounded-xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="community"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-start text-lg">
              Thriving Community
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-start">
              Join a network of passionate designers and grow together.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            "30+ exercises",
            "150+ lessons",
            "600+ hours",
            "Lifetime access",
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow text-center">
              <h2 className="text-2xl font-bold">{item.split(" ")[0]}</h2>
              <p className="text-gray-500">
                {item.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
