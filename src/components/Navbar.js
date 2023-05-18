import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/userSlice";

const NavbarContainer = styled.nav`
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0;
  background-color: black;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const MenuItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const activeStyle = {
  fontWeight: "bold",
};

const NotificationCount = styled.div`
  display: inline-block;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 50%;
`;

const ResponsiveNavbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const cartCnt = useSelector((state) => state.cart.totalCartItem);
  console.log(typeof(cartCnt))
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <NavbarContainer>
      <Logo to="/">Logo</Logo>
      <Menu>
        {user ? (
          <>
            <MenuItem>
              <NavLink
                exact
                to="/"
                activeStyle={activeStyle}
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                exact
                to="/product"
                activeStyle={activeStyle}
                style={{ textDecoration: "none", color: "white" }}
              >
                Product
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                exact
                to="/about"
                activeStyle={activeStyle}
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </NavLink>
            </MenuItem>
            <MenuItem>
              <p
                onClick={handleLogout}
                style={{ textDecoration: "none", color: "white" }}
              >
                Logout
              </p>
            </MenuItem>
            <MenuItem style={{ display: "flex", alignItems: "center" }}>

                <Link to="/cart"  style={{ textDecoration: "none", color: "white" }}>Cart Checkout</Link>
              <NotificationCount>{cartCnt}</NotificationCount>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </NavbarContainer>
  );
};

export default ResponsiveNavbar;
