// ================= Footer.jsx =================
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 rounded-lg mt-5">
      <div className="max-w-5xl mx-auto ">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between  mb-10">
          {/* Left */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    className="w-8 h-8 rounded-full border-2 border-black"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                  4K+
                </div>
              </div>

              <div>
                <p className="text-yellow-400 text-sm">★★★★★</p>
                <p className="text-xs text-gray-400">Join 4000+ Students</p>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-2">🎓 Educore</h2>
            <p className="text-white text-sm leading-relaxed">
              Learn UI/UX design with real-world projects and build a strong
              portfolio.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-3 font-semibold">Links</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                {[
                  "Overview",
                  "Curriculum",
                  "Instructor",
                  "Testimonials",
                  "Pricing",
                  "FAQs",
                ].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Legal</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                {["Privacy Policy", "Terms", "404"].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Socials</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Instagram</li>
                <li className="hover:text-white cursor-pointer">Twitter</li>
                <li className="hover:text-white cursor-pointer">Tiktok</li>
                <li className="hover:text-white cursor-pointer">Youtube</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Educore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
