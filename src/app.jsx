
import './app.css';
import Home from './components/home';
import Search from './components/search';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/videoList';

function App() {

  const [videos,setVideos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBVE7dLidzMlRE1b2bACDp_uE17TxxXmZs", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  

  return (
    <>
      <VideoList 
        videos={videos}  
      />
    </>
  );
}

export default App;
