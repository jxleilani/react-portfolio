import React from "react";

function Menu({ open, setOpen }) {
  return (
    <div className={open ? "menu-toggle open" : "menu-toggle"} open={open} onClick={() => setOpen(!open)}>
      <div className={open ? "bar bar-start open" : "bar bar-start"} open={open}></div>
      <div className={open ? "bar bar-mid open" : "bar bar-mid"} open={open}></div>
      <div className={open ? "bar bar-end open" : "bar bar-end"} open={open}></div>
    </div>
  );
}

export default Menu;
