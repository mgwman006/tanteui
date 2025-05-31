import path from "path";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import RegisterLandLord from "./components/RegisterLandLord";
import { Component } from "react";
import LandLordPage from "./components/LandLordPage";
import { getTenants } from "./services/userServices";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "login",
    Component: LogIn,
  },
  {
    path: "registerlandlord",
    Component: RegisterLandLord
  },
  {
    path: "landlord/:landlordId",
    Component: LandLordPage
  }
];

export default routes;
