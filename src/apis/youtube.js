import axios from 'axios';

const youtubeKey = process.env.REACT_APP_YOUTUBE_KEY;

// Configuring axios to connect to the youtube api
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: youtubeKey
    }
});