import React from 'react'
import styles from './ShoppingCards.module.css'

const ShoppingCards = ({ item }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={item.image} alt={item.name} />
      <h4>{item.category}</h4>
      <h1>{item.name}</h1>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.priceText}>Price: &#8377;{item.price}</p>
      <button className={styles.buyBtn}>Buy</button>
    </div>
  )
}

export default ShoppingCards;
