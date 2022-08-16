import React, { Component } from "react";
import styles from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 1,
    };
  }

  render() {
    return (
      <div className={styles.Content}>
        <div className={styles.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={styles.SearchResults}>
          <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content;
