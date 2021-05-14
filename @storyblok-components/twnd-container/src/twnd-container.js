import React from 'react';
import SbEditable from 'storyblok-react';
import cn from 'classnames';

const TwndContainer = (props) => {
  const { blok, Components, children } = props;
  const { content, center } = blok;
  return (
    <SbEditable content={blok}>
      <div className={cn('container', { 'mx-auto': center })}>
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

export default TwndContainer;
