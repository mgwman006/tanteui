import { Outlet } from "react-router";

export default function UserHome()
{
    return (
        <div>
            <p>User Home</p>
            <Outlet />
        </div>
        
    );
}