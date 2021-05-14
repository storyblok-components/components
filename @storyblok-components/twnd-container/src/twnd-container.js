import React from 'react';
import SbEditable from 'storyblok-react';

const TwndContainer = (props) => {
  const { blok, Components, children } = props;
  return (
    <SbEditable content={blok}>
      <div className="container mx-auto">
        {(blok.content &&
          blok.content.map((blok) =>
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
