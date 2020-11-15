import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/logos/Logo.png";
import serviceListIcon from "../../../Assets/icons/serviceList.png";
import plusIcon from "../../../Assets/icons/plus 1.png";
import homeIcon from "../../../Assets/logos/house.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <NavLink to="/" className="logo ">
        {" "}
        <img style={{ width: "40%" }} src={logo} alt="" />{" "}
      </NavLink>

      <div className="sidebar-option">
        <NavLink to="admin" activeClassName="active" className="sidebar-link">
          {" "}
          <h6>
            {" "}
            <img src={serviceListIcon} alt="" />
            Booking List{" "}
          </h6>{" "}
        </NavLink>
        <NavLink
          to="addService"
          activeClassName="active"
          className="sidebar-link"
        >
          {" "}
          <h6>
            {" "}
            <img src={plusIcon} alt="" /> Add Rent House{" "}
          </h6>{" "}
        </NavLink>
        <NavLink to="myRent" activeClassName="active" className="sidebar-link">
          {" "}
          <h6>
            {" "}
            <img src={homeIcon} alt="" /> My Rent{" "}
          </h6>{" "}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
