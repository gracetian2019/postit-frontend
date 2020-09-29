import React from 'react';

class Search extends React.Component {

  render(){
    return (
      <div className="search-bar">
        <input className="search-input" onChange={this.props.handleSearchChange} value={this.props.searchTerm} placeholder="Search your fav advice"/>
      </div>
    )
    }
}

export default Search