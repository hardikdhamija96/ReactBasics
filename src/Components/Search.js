import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.search} type="text" placeholder='Search Item'/>
    </div>
  )
}

export default Search;