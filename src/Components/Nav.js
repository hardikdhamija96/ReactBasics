import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.Nav}>
            <h1>Shopify</h1>
            <div className={styles['nav-list']}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
    </div>
  )
}

export default Nav;
