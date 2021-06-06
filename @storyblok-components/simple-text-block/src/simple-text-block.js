import React from 'react';
import SbEditable from 'storyblok-react';
import ReactMardown from 'react-markdown';
import { withSpacing } from '@storyblok-components/utils';
import cn from 'classnames';

const SimpleTextBlock = (props) => {
  const { blok, spacing } = props;
  const { title, content, title_size } = blok;
  const TitleTag = `h${title_size}`;

  const classes = cn(spacing);

  return (
    <SbEditable content={blok}>
      <div className={classes}>
        {title && <TitleTag style={{ marginBottom: '16px' }}>{title}</TitleTag>}
        <div>
          <ReactMardown>{content}</ReactMardown>
        </div>
      </div>
    </SbEditable>
  );
};

export default withSpacing(SimpleTextBlock);
