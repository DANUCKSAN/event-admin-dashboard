import React from 'react'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { NavLink } from 'react-router';

const user={
  name: "Dan",
  AvatarLetter: "D"
}

const Header = () => {
  
  return (
   <header className="header">
  <div className="header-container">

    <div className="header-left">
      <img src="/logo.svg" alt="EMS Logo" className="logo" />
    </div>

    <div className="header-center">
        <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            All Events
          </NavLink>

          <NavLink
            to="/manage"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Manage
          </NavLink>
    </div>

    <div className="header-right">
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.AvatarLetter}</Avatar>
      <p className="user-name">{user.name}</p>
    </div>

  </div>
</header>

  )
}

export default Header;
