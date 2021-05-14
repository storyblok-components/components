import React, { useContext, useEffect } from 'react';
import SbEditable from 'storyblok-react';

import Components from './components';
import { PageContext } from '../context/PageContext';

const Page = (props) => {
  const {
    content: { transparent_header },
  } = props;
  const pageContext = useContext(PageContext);
  useEffect(() => {
    pageContext.setData({ ...pageContext.data, transparent_header });
  }, [transparent_header]);

  return (
    <SbEditable content={props.content}>
      <main className="py-4">
        {props.content?.body?.map((blok) => {
          return React.createElement(Components(blok.component), {
            key: blok._uid,
            blok,
          });
        })}
      </main>
    </SbEditable>
  );
};

export default Page;
