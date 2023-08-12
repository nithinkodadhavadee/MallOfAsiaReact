import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import Logo from "../../assets/moa-logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="navbar-mobile">
      <div className="d-block d-sm-none">
        <div style={{ display: "flex", overflow: "scroll initial" }}>
          <a href="/">
            <div className="logo">
              <img src={Logo} />{" "}
            </div>
          </a>
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                <img src={Logo} />{" "}
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/launch" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    Newly Launched
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/brands" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Brands</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dine" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    Dine
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/luxury" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    Luxury
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/leisue" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    Leisure
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/services" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    Services
                  </CDBSidebarMenuItem>
                </NavLink>
                {/* <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  404 page
                </CDBSidebarMenuItem>
              </NavLink> */}
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
