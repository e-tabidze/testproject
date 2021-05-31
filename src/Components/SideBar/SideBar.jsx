import React from "react";
import { Customers, HomePage, ShoppingList } from "../../Assets/Icons";
import classes from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_items}>
        <div className={classes.container_icon}>
          <HomePage width="100%" />
        </div>
        <div className={classes.container_icon}>
          <ShoppingList width="100%" />
        </div>
        <div className={classes.container_icon}>
          <Customers width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
