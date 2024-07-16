import { Link, Outlet } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

import { ImExit } from "react-icons/im";
const UserPage = () => {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col-reverse justify-between">
        <div className="drawer  lg:drawer-open hidden lg:block">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <Link>Users</Link>
              </li>
              <li>
                <Link>Transaction</Link>
              </li>
              <li>
                <Link>Request</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="lg:hidden  mb-4">
          <ul className="flex rounded-full w-[75%] mx-auto px-2 py-1 justify-between text-3xl backdrop-blur-xl bg-white/15">
            <li className="border p-2 rounded-full bg-white text-[#5c5e79]">
              <Link to="/dashboard/users-home">
                <GoHome />
              </Link>
            </li>
            <li className="border p-2 rounded-full bg-white text-[#5c5e79]">
              <Link to="/dashboard/cash-in">
                <BsCashCoin title="Cash In" />
              </Link>
            </li>
            <li className="border p-2 rounded-full bg-white text-[#5c5e79]">
              <Link to="/dashboard/transaction">
                <GrTransaction />
              </Link>
            </li>
            <li className="border p-2 rounded-full bg-white text-[#5c5e79]">
              <ImExit
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              />
            </li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
