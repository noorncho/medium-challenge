import React from 'react';
import "./ArticleTile.scss";

const ArticleTile = (props) => {
    const {thumbnail, title,  author, publishDate, readTime, description} = props;
    
    return (
        <div className="article-tile">
            <img className="article-thumbnail" src={thumbnail} alt="" />
            <div className="article-summary">
                <p className="article-title">{title}</p>
                <p className="article-description">{description}</p>
            </div>
            <div className="article-info">
                <p className="article-author">{author}</p>
                <p className="article-date">{publishDate} ~ {readTime}min read</p>
            </div>            
        </div>
    )
}

export default ArticleTile;

