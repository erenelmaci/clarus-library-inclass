import React, { useState } from "react"
import { Logo, Menu, MenuLink, Nav, hamburgerIcon } from "./Navbar.style"
import { menuIcon } from "../../helper/iconData"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">CLarus Library</Logo>
      <hamburgerIcon onClick={() => setShowMenu(!showMenu)}>{menuIcon}</hamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar
