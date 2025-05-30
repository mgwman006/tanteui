import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("registerlandlord", "components/RegisterLandLord.tsx"),
    route("landlord/:landlordId", "components/LandLordPage.tsx")
] satisfies RouteConfig;
