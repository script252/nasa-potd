import React from 'react';
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './ImagePreview.scss';

function ImagePreview({title, hdurl, url, newTab=true}) {
    return (
        <div className="image-preview">
            <a href={hdurl} target={newTab ? "_blank" : ""}>
                <Img 
                    className="image" 
                    src={url} 
                    alt={title}
                    loader={(<Loader type="RevolvingDot" color="#00BFFF" height={100} width={100}/>)}
                >
                </Img>
            </a>
        </div>
    )
}

export default ImagePreview;