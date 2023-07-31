import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.Nav}>
            <h1>Shopify</h1>
            <div className={styles['nav-list']}>
                <a href="#">Home</a>
                <a href="#">Contacts</a>
                <a href="#">Products</a>
            </div>
    </div>
  )
}

export default Nav;
