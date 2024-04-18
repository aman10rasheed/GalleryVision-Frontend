import React from "react";
import SideNav from "./SideNav";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div>
      <div className="app-wrapper">
        {/* <!-- Sidenav Menu Start --> */}
        <SideNav />
        {/* <!-- Sidenav Menu End  --> */}

        {/* <!-- Start Page Content here --> */}
        <div className="app-content">
          {/* <!-- Topbar Start --> */}
          <Header />
          {/* <!-- Topbar End --> */}

          {/* <!-- Footer Start --> */}

          {/* <!-- Footer End --> */}
        </div>
        {/* <!-- End Page content --> */}
      </div>

      {/* <!-- Plugin Js --> */}
      {/* <script src="./src/assets/libs/jquery/jquery.min.js"></script>
      <script src="./src/assets/libs/simplebar/simplebar.min.js"></script>
      <script src="./src/assets/libs/node-waves/waves.min.js"></script>
      <script src="./src/assets/libs/@frostui/tailwindcss/frostui.js"></script> */}

      {/* <!-- App Js --> */}
      {/* <script src="./src/assets/js/app.js"></script> */}

      {/* <!-- Apexcharts js --> */}
      {/* <script src="./src/assets/libs/apexcharts/apexcharts.min.js"></script> */}

      {/* <!-- Morris Js--> */}
      {/* <script src="./src/assets/libs/morris.js/morris.min.js"></script> */}

      {/* <!-- Raphael Js--> */}
      {/* <script src="./src/assets/libs/raphael/raphael.min.js"></script> */}

      {/* <!-- Dashboard Project Page js --> */}
      {/* <script src="./src/assets/js/pages/dashboard.js"></script> */}
    </div>
  );
};

export default Dashboard;
