import React from "react";
function Button({style,value}){
    return(
        <button className={style} onClick={()=>alert('Users')}>{value}</button>
    );
}

export { Button };