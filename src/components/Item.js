import React from "react";

const Item = ({ title, body, id }) => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="number">{id}</div>
        <div className="post-info">
          <h2 className="post-title">{title}</h2>
          <p className="post-body">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
