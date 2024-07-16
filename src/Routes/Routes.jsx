import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Dashboard/Dashboard.jsx";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashborad />
      </PrivateRoute>
    ),
  },
  {
    path: "/login-signup",
    element: <LoginRegistration />,
  },
]);
export default router;
