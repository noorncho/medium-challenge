import React from 'react';
import "./ArticleTile.scss";

const ArticleTile = (props) => {
    const {articlesArr} = props;
    
    const artcleListJSX = articlesArr.map((article) => {
        let articleTileStyle = "article-tile";
        
        if(article.isFeatured){
            articleTileStyle += " featured";
        }
        if(article.isLatest){
            articleTileStyle += " latest";
        }
        if(article.isPopular){
            articleTileStyle += " polular";
        }

        return(            
            <>
                <div className={articleTileStyle}>
                    <img key={article.idArticle} src={article.strThumbnail} alt="" />
                    <div className="article-summary">
                        <p className="article-title">{article.strArticleTile}</p>
                        <p className="article-description">{article.strDescription}</p>
                    </div>
                    <div className="article-info">
                        <p className="article-author">{article.strAuthor}</p>
                        <p className="article-date">{article.strPublishDate} ~ {article.strReadTime}min read</p>
                    </div>
                </div>
            </>
        )
        
    });
    

    return (        
        <>
            {artcleListJSX}
        </>
    )
}

export default ArticleTile;

