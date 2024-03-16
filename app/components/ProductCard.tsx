import React from 'react'
import AddToCard from './AddToCard';
// import styles from './ProductCard.module.css';


const ProductCard = () => {
    return (
        // <div className={styles.cardContainer}>
        <div className='p-5 bg-sky-500 text-white text-xl hover:bg-sky-600'>
            <AddToCard />
        </div>
        // </div>
    )
}

export default ProductCard