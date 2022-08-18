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
      posts: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      });
    }, 2000);
  }

  handleSubmit = (event) => event.preventDefault();

  handleEvent = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) =>
      post.name.toLowerCase().includes(name)
    );
    this.setState({
      posts: filteredPosts,
    });
  };

  render() {
    return (
      <div className={styles.Content}>
        <div className={styles.TitleBar}>
          <h1>My Photos</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchInput">Search: </label>
            <input
              type="search"
              name="searchInput"
              id="searchInput"
              onChange={this.handleEvent}
              placeholder="By Author"
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={styles.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem
              isLoaded={this.state.isLoaded}
              savedPosts={this.state.posts}
            />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
