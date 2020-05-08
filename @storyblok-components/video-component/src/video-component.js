import React from 'react';
import ReactPlayer from 'react-player';
import './video-component.scss';

const VideoComponent = ({ blok }) => {
  const autoplay = !!blok.autoplay;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={blok.url || ''}
        className="react-player"
        width="100%"
        height="100%"
        playing={autoplay}
        muted={autoplay}
        playsinline
      />
    </div>
  );
};

export default VideoComponent;
