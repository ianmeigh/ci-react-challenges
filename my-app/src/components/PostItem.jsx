import React from 'react'
import styles from "./css/Content.module.css";

export default function PostItem(props) {
  return (
      props.savedPosts.map((post) => {
        const {name, title, description, image} = post;
        return (
          <div key={title} className={styles.SearchItem}>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image} alt="'{title}'." />
            <p>{description}</p>
          </div>
        )
      })
  )
}
