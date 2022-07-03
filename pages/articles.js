import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import styles from '../styles/articles.module.css'

const Articles = ({articles}) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>USCSSO Articles</title>
      </Head>
      <main>
        {articles.map((article) => {
          return (
            <>
              <Link href={`/articles/${article.data.slug}`}>
                <div className={styles.article}>
                    <img className={styles.article__image} src={article.data.image} />
                    <h3 className={styles.article__title}>{article.data.title}</h3>
                    <p className={styles.article__author}>{article.data.author}</p>
                    <p className={styles.article__date}>{article.data.date}</p>
                    <p className={styles.article__excerpt}>{article.data.excerpt}</p>
                </div>
              </Link>
              <hr className={styles.article__linebreak}></hr>
            </>
          );
        })}
      </main>
    </>
  )
}

export default Articles



export async function getStaticProps() {
  const files = fs.readdirSync('articles');
  const articles = [];
  files.forEach((file) => {
    const rawArticle = fs.readFileSync(path.join('articles', file), 'utf-8');
    const articleObject = matter(rawArticle);
    articles.push(articleObject)
  })

  console.log(articles);

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    }, 
  }
}

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - 
  */
