import React, { useState } from "react";

const SideNav = () => {
  const [showExtraPages, setShowExtraPages] = useState(false);
  const [showStaffMenu, setShowStaffMenu] = useState(false);

  const toggleStaffMenu = (e) => {
    e.preventDefault();
    setShowStaffMenu(!showStaffMenu);
  };

  const toggleExtraPages = (e) => {
    e.preventDefault();
    setShowExtraPages(!showExtraPages);
  };

  return (
    <div className="app-menu text-black bg-card border-none">
      {/* Brand Logo */}
      <a href="index.html" className="logo-box">
        <img
          src="./src/assets/images/gv-logo.png"
          className="logo-light h-6"
          alt="Light logo"
        />
        <img
          src="./src/assets/images/gv-logo.png"
          className="logo-dark h-12"
          alt="Dark logo"
        />
      </a>

      {/* Menu */}
      <div data-simplebar>
        <ul className="menu" data-fc-type="accordion">
          <li className="menu-title">Menu</li>

          <li className="menu-item">
            <a href="/" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-house"
                  style={{ color: "#007bff" }}
                ></i>
              </span>
              <span className="menu-text"> Dashboard </span>
              <span className="badge bg-primary rounded ms-auto">01</span>
            </a>
          </li>

          <li className="menu-item">
            <a href="calendar.html" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-calendar"
                  style={{ color: "#28a745" }}
                ></i>
              </span>
              <span className="menu-text"> Calendar </span>
            </a>
          </li>

          <li className="menu-title">Custom</li>

          <li className="menu-item hover:bg-gray-100">
            <a href="/CSVupload" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-upload"
                  style={{ color: "#6610f2" }}
                ></i>
              </span>
              <span className="menu-text"> CSV Upload </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="/channel" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-list"
                  style={{ color: "#dc3545" }}
                ></i>
              </span>
              <span className="menu-text"> Channel </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="/payment" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-credit-card"
                  style={{ color: "#ffc107" }}
                ></i>
              </span>
              <span className="menu-text"> Payment </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="/invoice" className="menu-link waves-effect">
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-file"
                  style={{ color: "#20c997" }}
                ></i>
              </span>
              <span className="menu-text"> Invoice </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a
              href=""
              onClick={toggleStaffMenu}
              className="menu-link waves-effect"
            >
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-users"
                  style={{ color: "#6c757d" }}
                ></i>
              </span>
              <span className="menu-text"> Staff </span>
              <span className="menu-arrow"></span>
            </a>

            <ul className={`sub-menu ${showStaffMenu ? "block" : "hidden"}`}>
              <li className="menu-item">
                <a href="/staffLog" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Staff Log</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="staffManagement" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Staff Management</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a
              href=""
              onClick={toggleExtraPages}
              className="menu-link waves-effect"
            >
              <span className="menu-icon">
                <i
                  className="ph-duotone ph-file"
                  style={{ color: "#17a2b8" }}
                ></i>
              </span>
              <span className="menu-text"> Settings </span>
              <span className="menu-arrow"></span>
            </a>

            <ul className={`sub-menu ${showExtraPages ? "block" : "hidden"}`}>
              <li className="menu-item">
                <a href="/settings" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Currency List</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/tax" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Tax List</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
