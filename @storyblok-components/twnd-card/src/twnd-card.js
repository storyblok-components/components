import React from 'react';
import SbEditable from 'storyblok-react';
import cn from 'classnames';
import { withSpacing } from '@storyblok-components/utils';

const TwndCard = (props) => {
  const { blok, spacing } = props;
  const { content, heading, image } = blok;
  console.log(image)

  const classes = cn(spacing);

  return (
    <SbEditable content={blok}>
      <div className={classes}>
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

export default withSpacing(TwndCard);
