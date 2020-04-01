import React from "react";
import Item from "./Item";

const ItemList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => {
        return (
          <Item
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
