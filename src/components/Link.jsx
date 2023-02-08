import React from "react";

function Link({style, value, uri}){
    return(
        <a href={uri} className={`${style} link`} target='_blank'>{ value }</a>
    );
}

export { Link };