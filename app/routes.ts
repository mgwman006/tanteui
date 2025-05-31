import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "components/Login.tsx"),
    route("registerlandlord", "components/RegisterLandLord.tsx"),
    route("landlord/:landlordId", "components/LandLordPage.tsx")
] satisfies RouteConfig;
