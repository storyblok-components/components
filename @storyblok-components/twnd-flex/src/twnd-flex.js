import React from 'react';
import SbEditable from 'storyblok-react';
import cn from 'classnames';
import { withSpacing } from '@storyblok-components/utils';

const TwndFlex = (props) => {
  const { blok, Components, children, spacing } = props;
  const { content, orientation, reverse, justify } = blok;

  const isReversed = () => reverse;
  const isRow = () => orientation === 'row';
  const isColumn = () => orientation === 'col';

  let result = '';

  if (isRow()) {
    result = isReversed() ? 'flex-row-reverse' : 'flex-row';
  } else if (isColumn()) {
    result = isReversed() ? 'flex-col-reverse' : 'flex-col';
  }

  const classes = cn(`flex ${result} ${justify} some-random-class`, spacing);
  // const classes = cn(`flex flex-row-reverse justify-between`, spacing);

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
