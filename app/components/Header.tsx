import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" color="transparent" className="header">
      <Toolbar className="header-toolbar">
        {/* Left: Logo */}
        <Box className="header-left">
          <img src="/logo.png" alt="EMS Logo" className="logo" />
        </Box>

        {/* Center Navigation */}
        <Box className="header-nav" sx={{ display: { xs: "none", md: "flex" } }}>
          <a href="/dashboard">Dashboard</a>
          <a href="/events">Events</a>
          <a href="/users">Users</a>
          <a href="/settings">Settings</a>
        </Box>

        {/* Right: Search + Notifications + Profile + Hamburger */}
        <Box className="header-right">
          <Box className="search-container">
            <SearchIcon className="search-icon" />
            <InputBase placeholder="Search..." className="search" />
          </Box>

          <IconButton color="inherit" className="icon-button">
            <NotificationsIcon />
          </IconButton>

          <Avatar className="avatar" onClick={handleProfileClick}>
            A
          </Avatar>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileClose}
            MenuListProps={{
              sx: {
                "animation": "fadeIn 0.3s ease-in-out",
              }
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

          {/* Hamburger menu for mobile */}
          <IconButton
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Slide-in Menu */}
        {mobileMenuOpen && (
          <Box className="mobile-nav">
            <a href="/dashboard">Dashboard</a>
            <a href="/events">Events</a>
            <a href="/users">Users</a>
            <a href="/settings">Settings</a>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
