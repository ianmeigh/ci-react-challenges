import React, { Component } from "react";
import NavBarChild from "./NavBarChild";
import styles from "./css/NavBarForm.module.css";

export class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({
        isLoggedIn: !prevState.isLoggedIn,
      }),
      console.log(this.state.isLoggedIn)
    );
  };

  render() {
    return (
      <div className={styles.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={this.handleClick}>Login</button>
          </div>
        ) : (
          <NavBarChild toggleIsLoggedIn={this.handleClick} />
        )}
      </div>
    );
  }
}

export default NavBarForm;
