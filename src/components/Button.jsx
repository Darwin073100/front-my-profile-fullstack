import React from "react";
function Button({style,value,click}){
    return(
        <button className={style} onClick={click}>{value}</button>
    );
}

export { Button };