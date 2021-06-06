import React from 'react';
import SbEditable from 'storyblok-react';
import cn from 'classnames';
import { withSpacing } from '@storyblok-components/utils';

const TwndFlex = (props) => {
  const { blok, Components, children, spacing } = props;
  const { content, orientation, reverse, justify } = blok;

  const classes = cn(
    `flex ${
      reverse ? `flex-${orientation}-reverse` : `flex-${orientation}`
    } justify-${justify}`, spacing
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

export default withSpacing(TwndFlex);
