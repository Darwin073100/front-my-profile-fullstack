import React from "react";
function Button({style,value}){
    return(
        <button className={style} onClick={()=>alert('BUTTON')}>{value}</button>
    );
}

export { Button };