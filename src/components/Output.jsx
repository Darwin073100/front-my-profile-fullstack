import React from "react";

function Output({label,output}) {
  return (
    <div className="output">
      <div className="name">
        <span>{ label }</span>
      </div>
      <div className="content">
        <span>{ output }</span>
      </div>
    </div>
  );
}

export { Output };
