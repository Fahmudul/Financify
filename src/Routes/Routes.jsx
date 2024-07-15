import { createBrowserRouter } from "react-router-dom";
import Dashborad from "../Dashboard/Dashboard.jsx";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration.jsx";
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashborad />,
  },
  {
    path: "/login-signup",
    element: <LoginRegistration />,
  },
]);
export default router;
