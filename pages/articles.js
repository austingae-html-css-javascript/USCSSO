import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
            <Link href={`/articles/${article.data.slug}`}>
              <div>
                  <img src={article.data.image} style={{width: '300px'}}/>
                  <h3>{article.data.title}</h3>
                  <p>{article.data.author}</p>
                  <p>{article.data.date}</p>
                  <p>{article.data.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  )
}

export default Articles



export async function getStaticProps() {
  const files = fs.readdirSync('articles');
  const articles = files.map((file) => {
    const rawArticle = fs.readFileSync(path.join('articles', file), 'utf-8');
    const articleObject = matter(rawArticle);
    return articleObject;
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
