import React from 'react'
import styles from "./css/Content.module.css";

export default function PostItem(props) {
  return (
      props.savedPosts.map((post) => {
        const {type, user, webformatURL, tags} = post;
        return (
          <div key={webformatURL} className={styles.SearchItem}>
            <p>Artwork type: {type}</p>
            <p>Artist: {user}</p>
            <img src={webformatURL} alt="'{title}'." />
            <p>Tags: {tags}</p>
          </div>
        )
      })
  )
}
