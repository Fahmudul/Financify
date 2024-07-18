import { Link, Outlet, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";

import { ImExit } from "react-icons/im";
import { BsSend } from "react-icons/bs";
const UserPage = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mockup-phone ">
        <div className="camera  "></div>
        <div className="display  " style={{ height: "654px" }}>
          <div
            className="artboard bg-white phone-1 rounded-br-[30px]  rounded-bl-[30px] flex flex-col  justify-between items-center "
            style={{ height: "652px" }}
          >
            <Outlet />
            <div className="mb-1  w-[100%] lg:p-0 rounded-bl-[35px] pr-3 rounded-br-[35px]  ">
              <ul className="flex w-[97%] shadow-xl  mx-auto gap-8  py-1  justify-center text-4xl rounded-bl-[35px] pr-3 rounded-br-[35px] bg-[#222222] rounded-tl-[15px] rounded-tr-[15px]">
                <li className="  py-2">
                  <Link
                    to="/dashboard/user-home"
                    className="flex flex-col items-center gap-1"
                  >
                    <GoHome className="text-new-primary"/>
                    <div
                      className={`${
                        location?.pathname === "/dashboard/user-home"
                          ? "w-2 h-2 color-primary text-base rounded-full"
                          : "hidden"
                      }`}
                    ></div>
                  </Link>
                </li>
                <li className="  py-2">
                  <Link
                    to="/dashboard/transfer"
                    className="flex flex-col items-center gap-1"
                  >
                    <BsSend title="Cash In" className="text-new-primary"/>
                    <div
                      className={`${
                        location?.pathname === "/dashboard/transfer"
                          ? "w-2 h-2 color-primary text-base rounded-full"
                          : "hidden"
                      }`}
                    ></div>
                  </Link>
                </li>
                <li className=" py-2">
                  <Link
                    to="/dashboard/transaction"
                    className="flex flex-col items-center gap-1"
                  >
                    <GrTransaction className="text-new-primary"/>
                    <div
                      className={`${
                        location?.pathname === "/dashboard/transaction"
                          ? "w-2 h-2 color-primary text-base rounded-full"
                          : "hidden"
                      }`}
                    ></div>
                  </Link>
                </li>
                <li className="flex flex-col items-center gap-1 py-2">
                  <ImExit className="text-new-primary"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
