import React from "react";
import Navigation from "../navigation/Navigation";
import { Icon } from "../../../svg/Icon";
const Sidebar = ({ visible, setVisible }) => {
  return (
    <>
      <div className="sidebar__icon" onClick={() => setVisible(false)}>
        <Icon color="white" size={"20"} name="close" />
      </div>
      <Navigation className={"sidebar__navigation"} setVisible={setVisible} />
    </>
  );
};

export default Sidebar;
