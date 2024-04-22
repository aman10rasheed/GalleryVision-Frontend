import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
const TotalChaneel = () => {
  return (
    <div className="rounded-lg border border-stroke bg-card py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2  dark:bg-gray-200">
        <FontAwesomeIcon icon={faUsers} size="3x" className="text-red-700" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md text-lg font-bold text-black ">3.456</h4>
          <span className="text-sm font-medium text-gray-400">
            Total Channels
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalChaneel;
