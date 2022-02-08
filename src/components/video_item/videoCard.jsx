import React from 'react';
import styles from './videoCard.module.css';

const VideoCard = (props) => {

  const {snippet} = props.video;

  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img  className={styles.thumbnail} 
              src={snippet.thumbnails.medium.url} 
              alt="video thumbnail" 
        />
        <div className={styles.metadata}>
          <p className={styles.title} >{snippet.title}</p>
          <p className={styles.channel} >{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;