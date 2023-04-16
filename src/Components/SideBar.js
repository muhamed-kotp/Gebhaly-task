import React from "react";
import Nav from "react-bootstrap/Nav";
import "../Style/SideBar.css";
import { NavLink } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import {ImHome3} from "react-icons/im";
import {HiOutlineUsers} from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Nav.Link className="side-links" variant="dark" as={NavLink} to="/Dashboard">
        
    <ImHome3/>    Dashboard
      </Nav.Link>
      <Nav.Link  className="side-links" variant="dark" as={NavLink} to="/Products">
      <RiShoppingBasketLine/> Products
      </Nav.Link>

      <Nav.Link  className="side-links" variant="dark" as={NavLink} to="/Users">
      <HiOutlineUsers/>  Users
      </Nav.Link>
    </div>
  );
};

export default SideBar;
