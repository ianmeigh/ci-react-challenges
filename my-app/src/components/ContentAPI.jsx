import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import styles from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";

export class ContentAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () =>
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=100`
      )
      .then((response) => {
        const fetchedPosts = response.data.hits;
        console.log(fetchedPosts);
        this.setState({
          isLoaded: true,
          savedPosts: fetchedPosts,
          posts: fetchedPosts,
        });
      });

  handleSubmit = (event) => event.preventDefault();

  handleEvent = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = this.state.savedPosts.filter((post) =>
      post.user.toLowerCase().includes(name)
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
            <PostItemAPI
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

export default ContentAPI;
