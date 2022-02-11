import React from "react";

import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  // Set the states properties and their default values.
  state = {
    videos: [],
    selectedVideo: null
  };

  // Sets the initial search when the page firt loads
  componentDidMount() {
    console.log(process.env.REACT_APP_YOUTUBE_KEY);

    this.onFormSubmit('programming');
  }
  
  onFormSubmit = async term => {
    // Send the term out to the youtube search api.
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      // Set the videos property array to the response of
      // videos from the youtube api search.
      videos: res.data.items,
      // Set the selectedVideo property to default as the first
      // video from the response
      selectedVideo: res.data.items[0]
    });
  };
  
  onVideoSelect = video => {
    // Set the selectedVideo peoperty to the selected video
    this.setState({ selectedVideo: video });
  };
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
