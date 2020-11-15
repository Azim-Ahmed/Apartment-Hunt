import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/logos/Logo.png";
import serviceListIcon from "../../../Assets/icons/serviceList.png";
import plusIcon from "../../../Assets/icons/plus 1.png";
import personIcon from "../../../Assets/icons/person.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <NavLink to="/" className="logo ">
        {" "}
        <img src={logo} alt="" />{" "}
      </NavLink>

      <div className="sidebar-option">
        <NavLink to="admin" activeClassName="active" className="sidebar-link">
          {" "}
          <h6>
            {" "}
            <img src={serviceListIcon} alt="" /> Services list{" "}
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
            <img src={plusIcon} alt="" /> Add Service{" "}
          </h6>{" "}
        </NavLink>
        <NavLink
          to="makeAdmin"
          activeClassName="active"
          className="sidebar-link"
        >
          {" "}
          <h6>
            {" "}
            <img src={personIcon} alt="" /> Make Admin{" "}
          </h6>{" "}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
