import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ name, price, id }) => (
            <div key={id}>
              <h3>{name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
