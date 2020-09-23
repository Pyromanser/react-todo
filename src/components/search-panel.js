import React from "react";

const SearchPanel = () => {

    const searchText = "Type here to search";
    const serachStyle = {
        fontSize: '20px'
    };

    return <input
        style={serachStyle}
        placeholder={searchText}/>;
}

export default SearchPanel;