import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/DashboardLayout.css";

import SideBar from "../common/UI/SideBar";
import DashHeader from "../common/UI/DashHeader";

const DashboardLayout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuHover, setMenuHover] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const dashHeaderProps = {
    setToggleMenu,
    setShowModal,
    hideModal,
    showModal,
    toggleMenu,
  };

  return (
    <div
      className={
        toggleMenu && menuHover
          ? "dbClose dashboardContainer"
          : "dbOpen dashboardContainer"
      }
    >
      <div
        className={
          toggleMenu && menuHover
            ? "leftSide collapsed"
            : "leftSide Uncollapsed"
        }
      >
        <div className="logo" style={{ display: toggleMenu ? "none" : "flex" }}>
          <Link to="/">
            <img src="/icons/logo.png" alt="logo-sabkimandi" width="150" />
          </Link>
        </div>
        <SideBar setMenuHover={setMenuHover} />
      </div>
      <div className="rightSide">
        <DashHeader {...dashHeaderProps} />
        <div
          className="page-container"
          onClick={() => {
            setToggleMenu(true);
          }}
        >
          <Outlet />
        </div>
        <footer>
          <p>
            Copyright &#169; 2023-2027{" "}
            <a href="https://sabkimandi.com/" target="_blank">
              SabkiMandi.com
            </a>{" "}
            All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
