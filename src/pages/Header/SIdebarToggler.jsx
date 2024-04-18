import React from "react";

const SIdebarToggler = ({ toggleSidebar }) => {
  return (
    <div>
      <button
        onClick={toggleSidebar}
        id="button-toggle-menu"
        className="nav-link p-2 waves-effect me-auto"
      >
        <span className="sr-only">Menu Toggle Button</span>
        <span className="flex items-center justify-center h-6 w-6">
          <i className="ph ph-list text-2xl"></i>
        </span>
      </button>
    </div>
  );
};

export default SIdebarToggler;
