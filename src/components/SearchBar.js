import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  
  onChangeInput = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.onChangeInput} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
