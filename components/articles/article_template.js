import React from 'react'
import Link from 'next/link'
import styles from '../../styles/article_template.module.css'

const ArticleTemplate = (props) => {
  return (
    <>
      <Link href={`/articles/${props.slug}`}>
        <div className={styles.article}>
            <img className={styles.article__image} src={props.image} />
            <h3 className={styles.article__title}>{props.title}</h3>
            <p className={styles.article__author}>{props.author}</p>
            <p className={styles.article__date}>{props.date}</p>
            <p className={styles.article__excerpt}>{props.excerpt}</p>
        </div>
    </Link>
  </>
  );
}

export default ArticleTemplate