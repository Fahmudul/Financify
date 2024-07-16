import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Dashboard/Dashboard.jsx";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Transaction from "../Pages/Common/Transaction.jsx";
import Users from "../Pages/Admin/Users.jsx";
import AdminHome from "../Pages/Admin/AdminHome.jsx";
import AllUsers from "../Pages/Admin/AllUsers.jsx";
import AdminRoute from "./AdminRoute.jsx";
import UserPage from "../Pages/UserPage/UserPage.jsx";
import UserHome from "../Pages/UserPage/UserHome.jsx";
import CashIn from "../Pages/UserPage/CashIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegistration />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashborad />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "transaction-admin",
        element: (
          <AdminRoute>
            <Transaction />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "users-home",
        element: <UserHome />,
      },
      {
        path: "cash-in",
        element: <CashIn />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
    ],
  },
]);
export default router;
