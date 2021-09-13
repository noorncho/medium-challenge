import React from 'react';
import "./FeaturedWriterTile.scss";
import articles from '../../data/articles';
import ArticleTile from '../ArticleTile/ArticleTile';

const FeaturedWriterTile = (props) => {
    const {featuredWriter} = props;
    const featuredWriterArticles = articles.filter(article => article.strAuthor.match(featuredWriter)).slice(0, 3);

    return (
        <div className="featured-tile">
            <div>
                <img className="featured-tile__pfp" src="https://placebear.com/200/200" alt=""/>
                <button className="featured-tile__button">Follow</button>
            </div>
            <div className="writer-profile">
                <h4>{featuredWriter}</h4>
                <p className="writer-profile__bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quia ea incidunt quibusdam consequuntur et consequatur natus.</p>
            </div>
            <div className="writer-profile__articles">
                <ArticleTile articlesArr={featuredWriterArticles} />
            </div>
        </div>
    )
}

export default FeaturedWriterTile;
