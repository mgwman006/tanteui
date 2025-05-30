// Header.tsx
import { useNavigate } from "react-router";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { getFromLocalStorage, saveToLocalStorage } from "../utilities/localStorage";

export function Header() {
  const navigate = useNavigate();
  const showLogOutButton = getFromLocalStorage("isUserLoggedIn") !== "true";

  const handleLogOut = () => {
    saveToLocalStorage("isUserLoggedIn", "false");
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            Logo
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button hidden={showLogOutButton} color="inherit" onClick={handleLogOut}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
