import React from 'react';
import ImagePreview from './ImagePreview';
import ArticleText from './ArticleText';

function ImageArticle({copyright, articleText, hdImageUrl, title, imageUrl, subTitle}) {
    return (
        <article>
            <ImagePreview 
                title={title}
                hdurl={hdImageUrl}
                url={imageUrl}>
            </ImagePreview>
            <ArticleText
                title={title}
                subTitle={subTitle}
                text={articleText}
            >
            </ArticleText>
        </article>
    )
}

export default ImageArticle;