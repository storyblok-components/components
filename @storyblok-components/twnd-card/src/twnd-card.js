import React from 'react';
import SbEditable from 'storyblok-react';
// import cn from 'classnames';

const TwndCard = (props) => {
  const { blok } = props;
  const { content, heading, image } = blok;
  console.log(image);

  return (
    <SbEditable content={blok}>
      <div>
        <img
          src="https://source.unsplash.com/user/erondu/160x120"
          alt="randopm image"
        />
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </SbEditable>
  );
};

export default TwndCard;
