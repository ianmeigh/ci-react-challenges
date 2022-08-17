import React, { Component } from "react";
import styles from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isLoaded: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div className={styles.Content}>
        <div className={styles.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={styles.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem isLoaded={this.state.isLoaded} savedPosts={savedPosts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
