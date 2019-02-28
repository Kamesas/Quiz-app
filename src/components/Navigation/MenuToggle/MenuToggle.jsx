import React from "react";
import stl from "./MenuToggle.module.sass";

const MenuToggle = ({ isOpenMenu, toggleMenuHandler }) => {
  const cls = [stl.burger];

  if (isOpenMenu) {
    cls.push(stl.open);
  }

  return (
    <div className={stl.menuToggle}>
      <button className={cls.join(" ")} onClick={toggleMenuHandler} />
    </div>
  );
};

export default MenuToggle;
