import React from 'react';
import SbEditable from 'storyblok-react';
// import cn from 'classnames';

const TwndCard = (props) => {
  console.log('these are props from twnd card');
  console.log(props);

  const { blok } = props;
  const { content, heading, image } = blok;

  console.log('and this is image prop');
  console.log(image);

  return (
    <SbEditable content={blok}>
      <div>
        <img src="https://source.unsplash.com/random" alt="randopm image" />
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </SbEditable>
  );
};

export default TwndCard;
