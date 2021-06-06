import React from 'react';
import SbEditable from 'storyblok-react';
import ReactMardown from 'react-markdown';
// import { withSpacing } from '@storyblok-components/utils';
// import cn from 'classnames';

const SimpleTextBlock = (props) => {
  const { blok } = props;
  const { title, content, title_size } = blok;
  const TitleTag = `h${title_size}`;

  return (
    <SbEditable content={blok}>
      <div>
        {title && <TitleTag style={{ marginBottom: '16px' }}>{title}</TitleTag>}
        <div>
          <ReactMardown>{content}</ReactMardown>
        </div>
      </div>
    </SbEditable>
  );
};

export default SimpleTextBlock;
// export default withSpacing(SimpleTextBlock);
