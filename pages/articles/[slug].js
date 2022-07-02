import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const Article = ({articleObject}) => {
  return (
    <main>
      <ReactMarkdown>{articleObject.content}</ReactMarkdown>
    </main>
  )
}

export default Article

//getStaticPaths generate the necessary slugs. 
//In this case, beijing-s-commitment-to-the-planet and the-responses-of-us-and-china-towards-the-russia-ukraine-war-an-overview

export async function getStaticPaths() {
  const files = fs.readdirSync('articles');
  const slugs = files.map((file) => {
    const rawFile = fs.readFileSync(path.join('articles', file));
    const fileObject = matter(rawFile);
    const slug = fileObject.data.slug;
    return {
      params: { slug: slug}
    }
  })

  return {
    paths: JSON.parse(JSON.stringify(slugs)),
    fallback: false
  };
}

export async function getStaticProps( {params: {slug}}) {
  const rawArticle = fs.readFileSync(path.join('articles', slug + '.md'));
  const articleObject = matter(rawArticle);
  return {
    props: {
      articleObject : JSON.parse(JSON.stringify(articleObject)),
    }
  }
}