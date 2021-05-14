import React from 'react';
import NextLink from 'next/link';

export const withLink = (WrappedComponent, link) => {
  return (props) => {
    return <WrappedComponent {...props} Link={link} />;
  };
};

const LinkNext = ({
  storyblokLink,
  children,
  activeClassName,
  language,
  target,
  ...other
}) => {
  if (storyblokLink.linktype === 'story') {
    return (
      <NextLink
        href={`/${language ? `${language}/` : ''}${storyblokLink.cached_url}`}
        activeClassName={activeClassName}
      >
        <a {...other}>{children}</a>
      </NextLink>
    );
  }

  return target === '_blank' ? (
    <a
      href={storyblokLink.url}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    >
      {children}
    </a>
  ) : (
    <a href={storyblokLink.url} {...other}>
      {children}
    </a>
  );
};

export default LinkNext;
