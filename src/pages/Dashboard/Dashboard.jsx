import React from "react";
import SideNav from "./SideNav";

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
          <header className="app-header flex items-center px-5 gap-4">
            {/* <!-- Brand Logo --> */}
            <a href="index.html" className="logo-box">
              <img
                src="./src/assets/images/logo-sm.png"
                className="h-6"
                alt="Small logo"
              />
            </a>

            {/* <!-- Sidenav Menu Toggle Button --> */}
            <button
              id="button-toggle-menu"
              className="nav-link p-2 waves-effect me-auto"
            >
              <span className="sr-only">Menu Toggle Button</span>
              <span className="flex items-center justify-center h-6 w-6">
                <i className="ph ph-list text-2xl"></i>
              </span>
            </button>

            {/* <!-- Topbar Search --> */}
            <div className="md:flex hidden items-center relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i className="ph ph-magnifying-glass text-base"></i>
              </div>
              <input
                type="search"
                className="form-input px-8 rounded-full  bg-gray-500/10 border-transparent focus:border-transparent"
                placeholder="Search..."
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <i className="ph ph-microphone text-base hover:text-black"></i>
              </button>
            </div>

            {/* <!-- Language Dropdown Button --> */}
            <div className="relative">
              <button
                data-fc-type="dropdown"
                data-fc-placement="bottom-end"
                type="button"
                className="nav-link p-2 waves-effect fc-dropdown"
              >
                <span className="flex items-center justify-center h-6 w-6">
                  <img
                    src="./src/assets/images/flags/us.jpg"
                    alt="flags img"
                    className="h-4 w-6"
                  />
                </span>
              </button>
              <div className="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 mt-3 transition-[margin,opacity] duration-300 bg-white shadow-lg border border-gray-200 rounded-lg p-2">
                <a
                  href="javascript:void(0);"
                  className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src="./src/assets/images/flags/germany.jpg"
                    alt="flags img"
                    className="h-4"
                  />
                  <span className="align-middle">German</span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src="./src/assets/images/flags/italy.jpg"
                    alt="flags img"
                    className="h-4"
                  />
                  <span className="align-middle">Italian</span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src="./src/assets/images/flags/spain.jpg"
                    alt="flags img"
                    className="h-4"
                  />
                  <span className="align-middle">Spanish</span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src="./src/assets/images/flags/russia.jpg"
                    alt="flags img"
                    className="h-4"
                  />
                  <span className="align-middle">Russian</span>
                </a>
              </div>
            </div>

            {/* <!-- Fullscreen Toggle Button --> */}
            <div className="md:flex hidden">
              <button
                data-toggle="fullscreen"
                type="button"
                className="nav-link p-2 waves-effect"
              >
                <span className="sr-only">Fullscreen Mode</span>
                <span className="flex items-center justify-center h-6 w-6">
                  <i className="ph ph-arrows-out text-2xl"></i>
                </span>
              </button>
            </div>

            {/* <!-- Profile Dropdown Button --> */}
            <div className="relative">
              <button
                data-fc-type="dropdown"
                data-fc-placement="bottom-end"
                type="button"
                className="nav-link flex items-center gap-2.5 waves-effect p-2"
              >
                <img
                  src="./src/assets/images/users/avatar-6.jpg"
                  alt="user-image"
                  className="rounded-full h-8 w-8"
                />
                <span className="md:flex items-center hidden">
                  <span className="font-medium text-base">Jamie D.</span>
                  <i className="ph ph-chevron-down"></i>
                </span>
              </button>
              <div className="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2">
                <a
                  className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  Inbox
                </a>
                <a
                  className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  Profile
                </a>
                <a
                  className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  Settings
                </a>
                <a
                  className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  Lock Account
                </a>
                <a
                  className="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  Log Out
                </a>
              </div>
            </div>
          </header>
          {/* <!-- Topbar End --> */}

          <main className="p-6">
            {/* <!-- Page Title Start --> */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-slate-900 text-lg font-medium">Dashboard</h4>

              <div className="md:flex hidden items-center gap-3 text-sm font-semibold">
                <a href="#" className="text-sm font-medium text-slate-700">
                  Lunoz
                </a>
                <i className="bx bx-chevron-right text-lg flex-shrink-0 text-slate-400"></i>
                <a href="#" className="text-sm font-medium text-slate-700">
                  Menu
                </a>
                <i className="bx bx-chevron-right text-lg flex-shrink-0 text-slate-400"></i>
                <a
                  href="#"
                  className="text-sm font-medium text-slate-700"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </div>
            </div>
            {/* <!-- Page Title End --> */}

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="p-5">
                    <i className="bx bx-layer float-right text-3xl text-muted"></i>
                    <h6 className="text-muted text-sm uppercase">Orders</h6>
                    <h3 className="text-2xl mb-3" data-plugin="counterup">
                      1,587
                    </h3>
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 text-xs font-medium bg-success text-white rounded me-1">
                      +11%{" "}
                    </span>{" "}
                    <span className="text-muted">From previous period</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="p-5">
                    <i className="bx bx-dollar-circle float-right text-3xl text-muted"></i>
                    <h6 className="text-muted text-sm uppercase">Revenue</h6>
                    <h3 className="text-2xl mb-3">
                      $<span data-plugin="counterup">46,782</span>
                    </h3>
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 text-xs font-medium bg-danger text-white rounded me-1">
                      -29%{" "}
                    </span>{" "}
                    <span className="text-muted">From previous period</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="p-5">
                    <i className="bx bx-bx bx-analyse float-right text-3xl text-muted"></i>
                    <h6 className="text-muted text-sm uppercase">
                      Average Price
                    </h6>
                    <h3 className="text-2xl mb-3">
                      $<span data-plugin="counterup">15.9</span>
                    </h3>
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 text-xs font-medium bg-warning text-white rounded me-1">
                      0%{" "}
                    </span>{" "}
                    <span className="text-muted">From previous period</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="p-5">
                    <i className="bx bx-basket float-right text-3xl text-muted"></i>
                    <h6 className="text-muted text-sm uppercase">
                      Product Sold
                    </h6>
                    <h3 className="text-2xl mb-3" data-plugin="counterup">
                      1,890
                    </h3>
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 text-xs font-medium bg-success text-white rounded me-1">
                      +89%{" "}
                    </span>{" "}
                    <span className="text-muted">Last year</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}

            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <div className="card">
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="card-title mb-4">Daily Sales</h4>

                    <div className="relative">
                      <button
                        className="text-lg text-gray-600 p-2"
                        data-fc-placement="left-start"
                        data-fc-type="dropdown"
                        type="button"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </button>

                      <div className="hidden z-10 bg-white w-44 shadow rounded border p-2 transition-all duration-300 fc-dropdown-open:translate-y-0 translate-y-3">
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-stone-100"
                          href="javascript:void(0)"
                        >
                          Action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Another action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    id="morris-donut-example"
                    className="morris-chart"
                    style="height: 260px;"
                  ></div>

                  <div className="flex text-center mt-4">
                    <div className="w-1/2">
                      <h4 className="text-xl">5,459</h4>
                      <p className="text-muted">Total Sales</p>
                    </div>
                    <div className="w-1/2">
                      <h4 className="text-xl">18</h4>
                      <p className="text-muted">Open Compaign</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="card-title mb-4">Statistics</h4>

                    <div className="relative">
                      <button
                        className="text-lg text-gray-600 p-2"
                        data-fc-placement="left-start"
                        data-fc-type="dropdown"
                        type="button"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </button>

                      <div className="hidden z-10 bg-white w-44 shadow rounded border p-2 transition-all duration-300 fc-dropdown-open:translate-y-0 translate-y-3">
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-stone-100"
                          href="javascript:void(0)"
                        >
                          Action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Another action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    id="morris-bar-example"
                    className="morris-chart"
                    style="height: 260px;"
                  ></div>

                  <div className="flex text-center mt-4">
                    <div className="w-1/2">
                      <h4 className="text-xl">$1875.54</h4>
                      <p className="text-muted">Revenue</p>
                    </div>
                    <div className="w-1/2">
                      <h4 className="text-xl">541</h4>
                      <p className="text-muted">Total Offers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="card-title mb-4">Total Revenue</h4>

                    <div className="relative">
                      <button
                        className="text-lg text-gray-600 p-2"
                        data-fc-placement="left-start"
                        data-fc-type="dropdown"
                        type="button"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </button>

                      <div className="hidden z-10 bg-white w-44 shadow rounded border p-2 transition-all duration-300 fc-dropdown-open:translate-y-0 translate-y-3">
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-stone-100"
                          href="javascript:void(0)"
                        >
                          Action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Another action
                        </a>
                        <a
                          className="flex items-center py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100"
                          href="javascript:void(0)"
                        >
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    id="morris-line-example"
                    className="morris-chart"
                    style="height: 260px;"
                  ></div>

                  <div className="flex text-center mt-4">
                    <div className="w-1/2">
                      <h4 className="text-xl">$7841.12</h4>
                      <p className="text-muted">Total Revenue</p>
                    </div>
                    <div className="w-1/2">
                      <h4 className="text-xl">17</h4>
                      <p className="text-muted">Open Compaign</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <div className="card overflow-hidden">
                <div className="card-header flex justify-between items-center">
                  <h4 className="card-title">Recent Buyers</h4>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm bg-light !text-sm text-gray-800 "
                  >
                    Export
                  </a>
                </div>

                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle whitespace-nowrap">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-light/40 border-b border-gray-200">
                          <tr>
                            <th className="px-6 py-3 text-start">Product</th>
                            <th className="px-6 py-3 text-start">Customers</th>
                            <th className="px-6 py-3 text-start">Categories</th>
                            <th className="px-6 py-3 text-start">Popularity</th>
                            <th className="px-6 py-3 text-start">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">iPhone X</td>
                            <td className="px-6 py-3">Tiffany W. Yang</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Mobile
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="85"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:85%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 1200.00</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">iPad</td>
                            <td className="px-6 py-3">Dale P. Warman</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Tablet
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="72"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:72%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 1190.00</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">OnePlus</td>
                            <td className="px-6 py-3">Garth J. Terry</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Electronics
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="43"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:43%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 999.00</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">ZenPad</td>
                            <td className="px-6 py-3">Marilyn D. Bailey</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Cosmetics
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="37"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:37%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 1150.00</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">Pixel 2</td>
                            <td className="px-6 py-3">Denise R. Vaughan</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Appliences
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="82"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:82%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 1180.00</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-3">Pixel 2</td>
                            <td className="px-6 py-3">Jeffery R. Wilson</td>
                            <td className="px-6 py-3">
                              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">
                                Mobile
                              </span>
                            </td>
                            <td className="px-6 py-3">
                              <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  aria-valuenow="36"
                                  aria-valuemin="20"
                                  aria-valuemax="100"
                                  style="width:36%"
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-3">$ 1180.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card--> */}

              <div className="card overflow-hidden">
                <div className="card-header flex justify-between items-center">
                  <h4 className="card-title">Account Transactions</h4>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm bg-light !text-sm text-gray-800 "
                  >
                    Export
                  </a>
                </div>

                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle whitespace-nowrap">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-sm">
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">
                              <div className="font-medium">
                                4257 **** **** 7852
                              </div>
                              <div className="text-xs">11 April 2023</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">$79.49</div>
                              <div className="text-xs">Amount</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Visa</div>
                              <div className="text-xs">Card</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Helen Warren</div>
                              <div className="text-xs">Pay</div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">
                              <div className="font-medium">
                                4427 **** **** 4568
                              </div>
                              <div className="text-xs">28 Jan 2023</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">$1254.00</div>
                              <div className="text-xs">Amount</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Visa</div>
                              <div className="text-xs">Card</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Kayla Lambie</div>
                              <div className="text-xs">Pay</div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">
                              <div className="font-medium">
                                4265 **** **** 0025
                              </div>
                              <div className="text-xs">08 Dec 2022</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">$784.25</div>
                              <div className="text-xs">Amount</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Master</div>
                              <div className="text-xs">Card</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Hugo Lavarack</div>
                              <div className="text-xs">Pay</div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-6 py-3">
                              <div className="font-medium">
                                7845 **** **** 5214
                              </div>
                              <div className="text-xs">03 Dec 2022</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">$485.24</div>
                              <div className="text-xs">Amount</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Stripe</div>
                              <div className="text-xs">Card</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Amber Scurry</div>
                              <div className="text-xs">Pay</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-3">
                              <div className="font-medium">
                                4257 **** **** 7852
                              </div>
                              <div className="text-xs">12 Nov 2022</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">$8964.04</div>
                              <div className="text-xs">Amount</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Maestro</div>
                              <div className="text-xs">Card</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="font-medium">Caitlyn Gibney</div>
                              <div className="text-xs">Pay</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card--> */}
            </div>
          </main>

          {/* <!-- Footer Start --> */}
          <footer className="footer h-16 flex items-center px-6 bg-white border-t border-gray-200 mt-auto">
            <div className="flex md:justify-between justify-center w-full gap-4">
              <div>
                <p className="text-sm font-medium">
                  <script>document.write(new Date().getFullYear())</script> ©
                  Lunoz
                </p>
              </div>
              <div className="md:flex hidden gap-2 item-center md:justify-end">
                <p className="text-sm font-medium">
                  Design &amp; Develop by{" "}
                  <a href="#" className="text-primary">
                    MyraStudio
                  </a>
                </p>
              </div>
            </div>
          </footer>
          {/* <!-- Footer End --> */}
        </div>
        {/* <!-- End Page content --> */}
      </div>

      {/* <!-- Plugin Js --> */}
      <script src="./src/assets/libs/jquery/jquery.min.js"></script>
      <script src="./src/assets/libs/simplebar/simplebar.min.js"></script>
      <script src="./src/assets/libs/node-waves/waves.min.js"></script>
      <script src="./src/assets/libs/@frostui/tailwindcss/frostui.js"></script>

      {/* <!-- App Js --> */}
      <script src="./src/assets/js/app.js"></script>

      {/* <!-- Apexcharts js --> */}
      <script src="./src/assets/libs/apexcharts/apexcharts.min.js"></script>

      {/* <!-- Morris Js--> */}
      <script src="./src/assets/libs/morris.js/morris.min.js"></script>

      {/* <!-- Raphael Js--> */}
      <script src="./src/assets/libs/raphael/raphael.min.js"></script>

      {/* <!-- Dashboard Project Page js --> */}
      <script src="./src/assets/js/pages/dashboard.js"></script>
    </div>
  );
};

export default Dashboard;
