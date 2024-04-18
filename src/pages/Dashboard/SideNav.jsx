import React, { useState } from "react";

const SideNav = () => {
  const [showExtraPages, setShowExtraPages] = useState(false);
  const [showStaffMenu, setShowStaffMenu] = useState(false);

  const toggleStaffMenu = () => {
    setShowStaffMenu(!showStaffMenu);
  };

  const toggleExtraPages = () => {
    setShowExtraPages(!showExtraPages);
  };

  return (
    <div className="app-menu">
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
            <a href="index.html" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-house"></i>
              </span>
              <span className="menu-text"> Dashboard </span>
              <span className="badge bg-primary rounded ms-auto">01</span>
            </a>
          </li>

          <li className="menu-item">
            <a href="calendar.html" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-calendar"></i>
              </span>
              <span className="menu-text"> Calendar </span>
            </a>
          </li>

          <li className="menu-title">Custom</li>

          <li className="menu-item hover:bg-gray-100">
            <a href="javascript:void(0)" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-upload"></i>
              </span>
              <span className="menu-text"> CSV Upload </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="javascript:void(0)" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-list"></i>
              </span>
              <span className="menu-text"> Channel </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="javascript:void(0)" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-credit-card"></i>
              </span>
              <span className="menu-text"> Payment </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="javascript:void(0)" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-file"></i>
              </span>
              <span className="menu-text"> Invoice </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a href="javascript:void(0)" className="menu-link waves-effect">
              <span className="menu-icon">
                <i className="ph-duotone ph-chart-pie"></i>
              </span>
              <span className="menu-text"> Report </span>
            </a>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a
              href="javascript:void(0)"
              onClick={toggleStaffMenu}
              className="menu-link waves-effect"
            >
              <span className="menu-icon">
                <i className="ph-duotone ph-users"></i>
              </span>
              <span className="menu-text"> Staff </span>
              <span className="menu-arrow"></span>
            </a>

            <ul className={`sub-menu ${showStaffMenu ? "block" : "hidden"}`}>
              <li className="menu-item">
                <a href="staff-log.html" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Staff Log</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="staff-management.html" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Staff Management</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item hover:bg-gray-100">
            <a
              href="javascript:void(0)"
              onClick={toggleExtraPages}
              className="menu-link waves-effect"
            >
              <span className="menu-icon">
                <i className="ph-duotone ph-file"></i>
              </span>
              <span className="menu-text"> Settings </span>
              <span className="menu-arrow"></span>
            </a>

            <ul className={`sub-menu ${showExtraPages ? "block" : "hidden"}`}>
              <li className="menu-item">
                <a href="pages-starter.html" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Currency List</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-invoice.html" className="menu-link">
                  <span className="menu-dot"></span>
                  <span className="menu-text">Tax List</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Add other menu items and submenus similarly */}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
