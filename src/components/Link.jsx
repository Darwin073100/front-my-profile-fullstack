import React from "react";

function Link({style, value}){
    return(
        <a href="/" className={`${style} link`} target='_blank'>{ value }</a>
    );
}

export { Link };