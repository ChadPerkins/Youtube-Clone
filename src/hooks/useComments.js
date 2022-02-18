import {useState} from "react";

import youtube from "../apis/youtube";

const useComments = () => {
  // Set the comment's state and set it to an empty array
  const [comments, setComments] = useState([]);
  
  const getComments = async video => {
    const res = await youtube.get('/commentThreads', {
      params: {
        videoId: video.id.videoId
      }
    });
    setComments(res.data.items);
  };

    return [comments, getComments];
};

export default useComments;