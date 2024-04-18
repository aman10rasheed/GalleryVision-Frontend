import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TotalRevenue = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2  dark:bg-gray-200">
        <FontAwesomeIcon
          icon={faSackDollar}
          size="3x"
          className="text-green-700"
        />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-lg  dark:bg-white text-black font-extrabold">
            2.450
          </h4>
          <span className="text-sm font-medium text-slate-400">
            Total Revenue
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
