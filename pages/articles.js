import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import styles from '../styles/articles.module.css'

import ArticleTemplate from '../components/articles/article_template'

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
            <ArticleTemplate 
            title={article.data.title}
            image={article.data.image}
            author={article.data.author}
            date={article.data.date}
            excerpt={article.data.excerpt}
            slug={article.data.slug}

            key={article.title}
            />
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
    articles.push({content: articleObject.content, data: articleObject.data, formattedDate: new Date (articleObject.data.date)}); //You add the entire articleObject with (...articleObject) but you also add formattedDate
  })

  /*I have sorted the articles array by formattedDate to get 
  the articles with the newest formattedDates at the front and the articles
  with the oldest formattedDates at the end. 

  https://bobbyhadz.com/blog/javascript-sort-array-of-objects-by-date-property
  */
  articles.sort((a, b) => {
    return b.formattedDate - a.formattedDate
  })

  articles.forEach((article) => {
    console.log(article.data);
  })

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
