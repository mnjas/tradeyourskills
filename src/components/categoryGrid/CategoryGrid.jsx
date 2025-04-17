"use client"

import styles from './CategoryGrid.module.scss'
import { useRouter } from 'next/navigation'

const CategoryGrid = ({ items }) => {
  const router = useRouter()

  const handleClick = (href) => {
    router.push(href)
  }

  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => handleClick(item.href)}
        >
          <div className={styles.overlay}>
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
      {/* <button className={styles.button}>Voir plus</button> */}
    </div>
  )
}

export default CategoryGrid
