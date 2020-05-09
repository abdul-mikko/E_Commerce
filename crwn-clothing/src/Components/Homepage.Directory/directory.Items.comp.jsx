import React from "react";
import MenuItem from "../Homepage.Directory.Menu-items/Menu-items.comp";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryItems } from "../../Redux/HomePageDirectory/Directory.Selector";

import "./directory.styles.scss";

const Directory = ({ DirectoryItems }) => {
  return (
    <div className="directory-menu">
      {DirectoryItems.map(({ id, ...OtherDirectoryItemsProps }) => (
        <MenuItem key={id} {...OtherDirectoryItemsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  DirectoryItems: selectDirectoryItems,
});

export default connect(mapStateToProps)(Directory);
