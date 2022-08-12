import React from "react";
import styles from "./css/Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="#">My Photos</a>
      <a href="#">My Illustrations</a>
      <a href="#">My Paintings</a>
    </div>
  )
}

export default Sidebar;