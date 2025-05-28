import { Button } from "@mui/material";
import { useNavigate } from "react-router";


export default function HomePage()
{
    const navigate = useNavigate();
    function handleLogOut(): void {
        navigate("/");
    }

    return (
            <div>
                <Button onClick={handleLogOut}>Log Out</Button>
            </div>
    );
}