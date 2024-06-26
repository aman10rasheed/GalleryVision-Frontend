import React from "react";
import Profile from "./Profile";

const Header = ({ toggleSidebar }) => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="app-header flex items-center justify-between px-5 gap-4 md:justify-between border-none bg-card">
      {/* Brand Logo */}
      <a href="index.html" className="logo-box">
        <img
          src="./src/assets/images/logo-sm.png"
          className="h-6"
          alt="Small logo"
        />
      </a>

      {/* Sidenav Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        id="button-toggle-menu"
        className="nav-link p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-colors duration-200 ease-in-out"
      >
        <span className="sr-only">Menu Toggle Button</span>
        <span className="flex items-center justify-center h-6 w-6">
          <i className="ph ph-list text-2xl"></i>
        </span>
      </button>

      {/* Profile Dropdown Button, Fullscreen Toggle Button, and Topbar Search */}
      <div className="md:flex items-center relative">
        {/* Topbar Search */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <i className="ph ph-magnifying-glass text-base text-gray-400"></i>
          </div>
          <input
            type="search"
            className="form-input px-8 rounded-full bg-gray-100/50 border-transparent focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Profile Dropdown Button */}
        <div className="relative">
          <Profile />
        </div>

        {/* Fullscreen Toggle Button */}
        <div className="relative">
          <button
            onClick={toggleFullscreen}
            type="button"
            className="nav-link p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-colors duration-200 ease-in-out"
          >
            <span className="sr-only">Fullscreen Mode</span>
            <span className="flex items-center justify-center h-6 w-6">
              <i className="ph ph-arrows-out text-2xl"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
