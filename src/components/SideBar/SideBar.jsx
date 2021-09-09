import React from 'react';
import "./SideBar.scss";
import ArticleTile from '../ArticleTile/ArticleTile';
import Button from '../Button/Button';
import TopicList from '../TopicList/TopicList';

import articles from '../../data/articles';


const SideBar = () => {
    const popularArticles = articles.filter(article => article.isPopular);

    return (
        <>
            <section className="intro">
                <h2>Programming</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <Button buttonText={"Follow"} />
                <p>Follow ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <section className="related-topics">
                <h3>RELATED TOPICS</h3>
                <TopicList />
            </section>
            <section className="popular-articles">
                <h3>POPULAR IN PROGRAMMING</h3>
                <ArticleTile articlesArr={popularArticles}/>                
            </section>
        </>
    )
}

export default SideBar;
