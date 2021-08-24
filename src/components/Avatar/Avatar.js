import { React, useState } from "react";

import { ImageLoader } from '../ContentLoader/ContentLoader';

export const Avatar = ({ src, name, large, medium }) => {

    const [ showError, setShowError ] = useState(false);

    const style = {
        width: large ? '100px' : medium ? '50px' : '40px',
        // height: large ? '100px' : medium ? '70px' : '50px',
        // borderRadius: '50%',
        objectFit: 'cover'
    };

    const error = (e) => {
        setShowError(true);
    }

    if(showError){
        return <ImageLoader />;
    }

    if(src && src !== "") {
        return <img alt="" src={src} style={style} onErrorCapture={(e) => error(e)} onError={(e) => error(e)} />;
    } else{
        return <ImageLoader />;
    }
}