import React, { useState } from 'react';
import VideoCard from '../video_item/videoCard';
import styles from './videoList.module.css';

const VideoList = (props) => {

  return (
    <ul className={styles.videoList}>
      {props.videos.map(video => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </ul>
  );
};

export default VideoList;