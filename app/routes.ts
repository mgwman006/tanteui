import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("registerlandlord", "components/RegisterLandLord.tsx"),
    route("homepage", "components/HomePage.tsx")
] satisfies RouteConfig;
