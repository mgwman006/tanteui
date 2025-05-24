import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("register", "components/Register.tsx")
] satisfies RouteConfig;
