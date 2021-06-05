import React from 'react';
import SbEditable from 'storyblok-react';
import cn from 'classnames';

const TwndFlex = (props) => {
  const { blok, Components, children } = props;
  const { content, orientation, reverse } = blok;

  const classes = cn(
    `flex ${reverse ? `flex-${orientation}-reverse` : `flex-${orientation}`}`
  );

  return (
    <SbEditable content={blok}>
      <div className={classes}>
        {(content &&
          content.map((blok) =>
            React.createElement(Components(blok.component), {
              blok,
              key: blok._uid,
            })
          )) ||
          children}
      </div>
    </SbEditable>
  );
};

export default TwndFlex;
