import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div>
        {items.map(({ name, price }) => (
          <div>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
