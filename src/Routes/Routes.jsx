import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Dashboard/Dashboard.jsx";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Transaction from "../Pages/Common/Transaction.jsx";
import AdminHome from "../Pages/Admin/AdminHome.jsx";
import AllUsers from "../Pages/Admin/AllUsers.jsx";
import AdminRoute from "./AdminRoute.jsx";
import UserHome from "../Pages/UserPage/UserHome.jsx";
import CashIn from "../Pages/UserPage/CashIn.jsx";
import Transfer from "../Pages/Common/Transfer.jsx";
import VisitorPage from "../Pages/VisitorPage/VisitorPage.jsx";
import VisitorPrivateRoute from "./VisitorPrivateRoute.jsx";
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
      // User role routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "user-home",
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
      // Common routes
      {
        path: "transfer",
        element: <Transfer />,
      },

      // Agent role routes
      {
        path: "agent-home",
        element: <UserHome />,
      },
    ],
  },
  {
    path: "visitor",
    element: (
      <VisitorPrivateRoute>
        <VisitorPage />
      </VisitorPrivateRoute>
    ),
  },
]);
export default router;
