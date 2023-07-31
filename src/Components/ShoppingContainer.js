import React from 'react'
import Search from './Search';
import ShoppingCards from './ShoppingCards';
import styles from './ShoppingContainer.module.css'

const ShoppingContainer = () => {

  const shoppingItems = [
    {
      id: 1,
      name: 'Item 1',
      category: 'Category 1',
      price: 7200,
      description: 'This is item 1 description.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 2,
      name: 'Item 2',
      category: 'Category 2',
      price: 15000,
      description: 'This is item 2 description.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 3,
      name: 'Item 3',
      category: 'Category 3',
      price: 3000,
      description: 'This is item 3 description.',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 4,
      name: 'Item 4',
      category: 'Category 4',
      price: 9000,
      description: 'This is item 4 description.',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
    },
    // Add more items...
  ];


  return (
    <>
    <div className={styles.masterContainer}>
      <Search/>
      <div className={styles.container}>
        {shoppingItems.map((item) => (
            <ShoppingCards key={item.id} item={item} />
          ))}
      </div>
    </div>
    
    
    </>
  )
}

export default ShoppingContainer;