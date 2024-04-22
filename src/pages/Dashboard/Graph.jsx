import React from "react";
const YourComponent = () => {
  const dailySalesData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  };
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6 ">
      <div className="card">
        <div className="p-5  bg-card">
          <div className="flex justify-between items-center">
            <h4 className="card-title mb-4">Daily Sales</h4>
          </div>

          <div
            id="morris-donut-example"
            className="morris-chart"
            style={{ height: "260px" }}
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
        <div className="p-5 bg-card">
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
            style={{ height: "260px" }}
          ></div>

          <div className="flex text-center mt-4">
            <div className="w-1/2">
              <h4 className="text-xl">$1875.54</h4>
              <p className="text-muted">Revenue</p>
            </div>
            <div className="w-1/2">
              <h4 className="text-xl">541</h4>
              <p className="text-muted">Total </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="p-5 bg-card">
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
            style={{ height: "260px" }}
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
  );
};

export default YourComponent;
