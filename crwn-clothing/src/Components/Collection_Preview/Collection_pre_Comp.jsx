import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../Collection-item/Collectionitem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
