import React from "react"
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
import logo from "../../images/addict-logo.svg"

export default function Project({ Title, url, image }) {
  const mainImage = image.childImageSharp.fluid
  //console.log(props)
  return (
    <article className={styles.course}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} alt={Title} className={styles.img} />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          URL
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{Title}</h3>
        </div>
        <p>GitHub</p>
      </div>
    </article>
  )
}
