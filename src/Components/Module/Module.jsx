import React, { useState } from "react";
import { Plus, User, Mail, MessageSquare } from "lucide-react";
import { Moduledata } from "./Moduledata";

export default function CourseOverview() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-black text-white py-16 px-5 md:px-10" id="curriculum">
      {/* HEADER */}
      <div className="text-center mb-16">
        <button className="px-5 py-2 mb-5 rounded-full text-white bg-[#6241eb] font-medium transition hover:opacity-90">
          Curriculum
        </button>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
          What you’ll learn in this course
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center">
        {/* LEFT: Accordion */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
            What you’ll learn in this course
          </h2>

          <div className="space-y-4">
            {Moduledata.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:bg-white/5 transition"
                >
                  <span className="font-medium text-lg sm:text-base md:text-lg">
                    {item.title}
                  </span>
                  <Plus
                    className={`transition-transform duration-300 ${
                      active === index ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-6 pb-4 text-gray-400 text-sm sm:text-base">
                    {item.lessons}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Pricing + Form Card */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10">
          {/* Pricing Card */}

          {/* Advanced Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
              Contact Us
            </h2>
            <form className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-600 bg-white/20 text-white pl-10 pt-6 pb-2 placeholder-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition"
                />
                <label className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-600 bg-white/20 text-white pl-10 pt-6 pb-2 placeholder-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition"
                />
                <label className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare
                  className="absolute top-3 left-3 text-gray-400"
                  size={20}
                />
                <textarea
                  rows="4"
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-600 bg-white/20 text-white pl-10 pt-6 pb-2 placeholder-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition resize-none"
                ></textarea>
                <label className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
                  Your Message
                </label>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
