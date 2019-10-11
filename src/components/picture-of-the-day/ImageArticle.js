import React from 'react';
import ImagePreview from './ImagePreview';
import ArticleText from './ArticleText';
import NavControls from './NavControls';

function ImageArticle({copyright, articleText, hdImageUrl, title, imageUrl, subTitle, date, callbacks}) {
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
            <NavControls
                forwardCallback={callbacks.nextDay}
                backCallback={callbacks.previousDay}
                latestCallback={callbacks.latestDay}
                selectDateCallback={callbacks.selectDate}
                forwardVisible={!callbacks.isLatestDay()}
                date={date}
            ></NavControls>
        </article>
    )
}

export default ImageArticle;