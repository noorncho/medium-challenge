import React from 'react';
import articles from '../../data/articles';

const FeaturedWriterTile = (props) => {
    const {featuredWriter} = props
    //Featured Writer == "Little Star"
    const featuredWriterArticles = articles.filter(article => article.strAuthor === featuredWriter);
    console.log(featuredWriterArticles);

    return (
        <div>
            
        </div>
    )
}

export default FeaturedWriterTile;
