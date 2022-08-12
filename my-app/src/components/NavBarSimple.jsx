import React from 'react';
import styles from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello, guest!",
      buttonText: "log in"

    }
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      return {
        message: prevState.message === "Hello, guest!" ? "Welcome back, "+prevProps.user+"!" : "Hello, guest!",
        buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
      }
    }, () => {
      console.log("new state", this.state.message);
      console.log("new state", this.state.buttonText);
    });
  }

  render() {
    return (
      <div className={styles.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>{this.state.message}</span>
          <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
      </div>
    )
  }
}

export default NavBarSimple