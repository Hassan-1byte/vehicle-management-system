import React from "react";
import styled from "styled-components";

import { SidebarData } from "../SidebarData";
import SubMenu from "../SubMenu";

const Nav = styled.div`
  background: #1261a0;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarWrap = styled.div`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  position: absolute;
  top: 70;
  transition: 350ms;
  z-index: 10;
`;

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {/* <IconContext.Provider value={{ color: "#92929D" }}> */}
        {/* <Nav></Nav> */}
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
        {/* </IconContext.Provider> */}
      </div>
      {/* <Homepage /> */}
    </>
  );
};

export default Sidebar;
