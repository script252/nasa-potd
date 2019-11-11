import React, {useState} from 'react';
import './ArticleText.scss';

function ArticleText({title, subTitle, text, startVisible=false}) {

    const [visible, setVisible] = useState(startVisible);

    const onClickTab = () => { setVisible(!visible) };

    return (
        <div className = {visible ? "article-text opened" : "article-text"} onClick={onClickTab}>
            <h2>{subTitle}</h2>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ArticleText;