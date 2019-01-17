import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: "Client-ID 681186249b7562b325aad6169153c30339b3a750dab27729c7b93df0b7f317ef"
        } 
      });
      
      this.setState({ images: response.data.results});
  } 

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
