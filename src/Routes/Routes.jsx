import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Dashboard/Dashboard.jsx";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Transaction from "../Pages/Common/Transaction.jsx";
import Users from "../Pages/Admin/Users.jsx";
import AdminHome from "../Pages/Admin/AdminHome.jsx";
import AllUsers from "../Pages/Admin/AllUsers.jsx";
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
        element: <AdminHome />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
]);
export default router;
