import React from 'react';

const VideoCard = (props) => {
  return (
    <h1>
      {props.video.snippet.title}
    </h1>
  );
};

export default VideoCard;