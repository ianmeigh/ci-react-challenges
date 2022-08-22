import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import styles from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";

export default function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () =>
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=100`
      )
      .then((response) => {
        const fetchedPosts = response.data.hits;
        console.log(fetchedPosts);
        setIsLoaded(true);
        setSavedPosts(fetchedPosts);
        setPosts(fetchedPosts);
      });

  const handleSubmit = (event) => event.preventDefault();

  const handleEvent = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) =>
      post.user.toLowerCase().includes(name)
    );
    setPosts(filteredPosts);
  };

  return (
    <div className={styles.Content}>
      <div className={styles.TitleBar}>
        <h1>My Photos</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Search: </label>
          <input
            type="search"
            name="searchInput"
            id="searchInput"
            onChange={handleEvent}
            placeholder="By Author"
          />
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={styles.SearchResults}>
        {isLoaded ? (
          <PostItemAPI isLoaded={isLoaded} savedPosts={posts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
