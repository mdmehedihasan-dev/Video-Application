import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const router = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 bg-opacity-80 shadow-md">
          <h2 className="text-xl font-bold text-white text-center mb-4 md:mb-0">
            Meetu – Live Conversation Application
          </h2>
          <div className="flex gap-4 text-white font-medium">
            <p
              onClick={() => router("/aljk23")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Join as Guest
            </p>
            <p
              onClick={() => router("/auth")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Register
            </p>
            <p
              onClick={() => router("/auth")}
              role="button"
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Login
            </p>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center mt-16 md:mt-24 gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-8 max-w-xl text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
                  <span className="text-[#FF9839]">Connecting</span> People,
                  Anytime, Anywhere
                </h1>
                <p className="text-xl md:text-2xl text-white mt-4">
                  Cover a distance by Meetu Live Conversation
                </p>
              </div>
              <div>
                  <Button variant="contained">
                        <Link to={"/auth"}>Get Started</Link>
                    </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-xs md:max-w-sm">
              <img
                src="/mobile.png"
                alt="Mobile UI"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
