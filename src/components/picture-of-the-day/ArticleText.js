import React from 'react';
import './ArticleText.scss';

function ArticleText({title, subTitle, text}) {
    return (
        <div className = "article-text">
            <h2>{subTitle}</h2>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ArticleText;