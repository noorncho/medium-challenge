/**
 * Create a visual representation of https://medium.com/topic/programming
 */

import React from 'react'
import "./App.scss";

import Nav from './components/Nav/Nav';
import ArticleTile from './components/ArticleTile/ArticleTile';
import SideBar from './components/SideBar/SideBar';

import articles from "./data/articles.js";

const App = () => {
  const featuredArticle = articles.filter(article => article.isFeatured);
  const latestArticles = articles.filter(article => article.isLatest);
  //const popularArticles = articles.filter(article => article.isPopular);

  return (
      <>
        <Nav />
        <aside>          
          <SideBar />
        </aside>
        <section className="featured-article">
          <ArticleTile articlesArr={featuredArticle}/>
        </section>
        <section className="latest-articles">
          <ArticleTile articlesArr={latestArticles}/>
        </section>
      </>      
    )
}

export default App;
