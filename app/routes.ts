import Home from "./components/Home";
import LandLordPage from "./components/LandLordPage";
import HomePage from "./components/HomePage";
import TenantPage from "./components/TenantPage";

const routes = [
  {
    path: "/",
    Component: Home,
    children: [
      {
        path:"",
        Component: HomePage
      },
      {
        path:"landlord",
        Component: LandLordPage
      },
      {
        path:"tenants",
        Component: TenantPage
      }
    ]
  }
];

export default routes;
