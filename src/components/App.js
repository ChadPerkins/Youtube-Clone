import React, { useState, useEffect } from "react";

import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('programming');
  
  // Set the value of selectedVideo's state to default as
  // the first video from the response
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  

  const onVideoSelect = video => {
    // Set the value of selectedVideo's state to the selected video
    setSelectedVideo(video);
  };
  
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );

};

// This is the class based component I refactored.
// I'm eaving in for future reference

// class App extends React.Component {
//   // Set the properties states and their default values.
//   state = {
//     videos: [],
//     selectedVideo: null
//   };

//   // Sets the initial search when the page firt loads
//   componentDidMount() {
//     console.log(process.env.REACT_APP_YOUTUBE_KEY);

//     this.onFormSubmit('programming');
//   }
  
//   onFormSubmit = async term => {
//     // Send the term out to the youtube search api.
//     const res = await youtube.get('/search', {
//       params: {
//         q: term
//       }
//     });
//     this.setState({
//       // Set the videos state array to the response of
//       // videos from the youtube api search.
//       videos: res.data.items,
//       // Set the value of selectedVideo's state to default as
//       // the first video from the response
//       selectedVideo: res.data.items[0]
//     });
//   };
  
//   onVideoSelect = video => {
//     // Set the value of selectedVideo's state to the selected video
//     this.setState({ selectedVideo: video });
//   };
  
//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onFormSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
