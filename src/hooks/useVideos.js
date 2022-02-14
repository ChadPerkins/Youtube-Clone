import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = defaultSearchTerm => {
    // Set the properties states and their default values and
    // declare their set functions.
    const [videos, setVideos] = useState([]);
    
    // Sets the initial search when the page firt loads
    useEffect( ()=> {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        // Send the sarch request out to the youtube search api.
        const res = await youtube.get('/search', {
          params: {
            q: term
          }
        });
        // Set the videos state array to the response of
        // videos from the youtube api search.
        setVideos(res.data.items);
    };
    
    return [videos, search];
};

export default useVideos;