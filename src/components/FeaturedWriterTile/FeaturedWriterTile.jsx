import React from 'react';
import articles from '../../data/articles';
import ArticleTile from '../ArticleTile/ArticleTile';

const FeaturedWriterTile = (props) => {
    const {featuredWriter} = props;
    const featuredWriterArticles = articles.filter(article => article.strAuthor.match(featuredWriter)).slice(0, 3);

    return (
        <>
            <div className="writer-profile">
                <h4>{featuredWriter}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quia ea incidunt quibusdam consequuntur et consequatur natus.</p>
            </div>
            <ArticleTile articlesArr={featuredWriterArticles} />
        </>
    )
}

export default FeaturedWriterTile;
