/**
 * Create a visual representation of https://medium.com/topic/programming
 */

import React from 'react'
import "./App.scss";

import Nav from './components/Nav/Nav';
import ArticleTile from './components/ArticleTile/ArticleTile';
import SideBar from './components/SideBar/SideBar';
import FeaturedWriterTile from './components/FeaturedWriterTile/FeaturedWriterTile';

import articles from "./data/articles.js";

const App = () => {
  const featuredArticle = articles.filter(article => article.isFeatured);
  const latestArticlesFirst = articles.filter(article => article.isLatest).slice(0, 3);
  const latestArticlesSecond = articles.filter(article => article.isLatest).slice(3, -1);

  return (
      <>
        <Nav />
        <main>          
          <div className="right-panel">
            <SideBar />
          </div>

          <div className="left-panel">          
            <section className="featured-article">
              <ArticleTile articlesArr={featuredArticle}/>
            </section>            
            <section className="latest-articles">
              <ArticleTile articlesArr={latestArticlesFirst}/>
              <section className="featured-writer">
                <h3>Featured Writer</h3>
                <FeaturedWriterTile featuredWriter="Little Star" />
              </section>
              <ArticleTile articlesArr={latestArticlesSecond} />
            </section>
          </div>
        </main>
      </>      
    )
}

export default App;
