import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Account from "./components/auth/Account";
import Auth from "./components/auth/Auth";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import RentalProfile from "./components/user/RentalProfile";
import UserHome from "./components/user/UserHome";
import UserProfile from "./components/auth/UserProfile";

const routes = [
  {
    path: "/",
    Component: Home,
    children: [
      {
        path:"",
        Component: HomePage
      }
    ]
  },
  {
    path: "auth",
    Component: Auth,
    children:[
      {
        path:"",
        Component: Account
      },
      {
        path:"login",
        Component: LogIn
      },
      {
        path:"register",
        Component: Register
      },
      {
        path:"user",
        Component: UserProfile
      }
    ]
  }
];

export default routes;
