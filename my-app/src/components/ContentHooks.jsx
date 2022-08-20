import React, { useState, useEffect } from "react";
import styles from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export default function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  const handleSubmit = (event) => event.preventDefault();

  const handleEvent = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) =>
      post.name.toLowerCase().includes(name)
    );
    setFetchedPosts(filteredPosts);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
    }, 2000);
  }, []);

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
          <h4>posts found: {fetchedPosts.length}</h4>
        </form>
      </div>
      <div className={styles.SearchResults}>
        {isLoaded ? (
          <PostItem isLoaded={isLoaded} savedPosts={fetchedPosts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
