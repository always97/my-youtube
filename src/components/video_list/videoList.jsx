import React, { useState } from 'react';
import VideoCard from '../video_item/videoCard';

const VideoList = (props) => {

  return (
    <ul>
      {props.videos.map(video => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </ul>
  );
};

export default VideoList;