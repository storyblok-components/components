import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Storyblok from '../lib/storyblok-client';
import {
  getAllLanguageCodes,
  getAllPublishedStoriesSlugs,
} from '../lib/storyblok-gapi';

const CatchAll = ({ story, language }) => (
  <Layout language={language}>
    {story && <Page content={story.content} />}
  </Layout>
);

export default CatchAll;

export async function getStaticProps(context) {
  const {
    Space: { languageCodes },
  } = await getAllLanguageCodes();
  const {
    params: { slug },
  } = context;
  let fullSlug = '';
  const language = slug[0];

  if (slug.length === 1 && languageCodes.includes(slug[0])) {
    fullSlug = `${slug[0]}/home`;
  } else {
    fullSlug = slug.join('/');
  }
  const completeStoryblokDataUrl = `cdn/stories/${fullSlug}`;

  try {
    const {
      data: { story },
    } = await Storyblok.get(completeStoryblokDataUrl, {
      resolve_relations: 'featured-articles.articles',
    });

    return {
      props: {
        story,
        language,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const {
    PageItems: { items },
  } = await getAllPublishedStoriesSlugs();
  const {
    Space: { languageCodes },
  } = await getAllLanguageCodes();

  const pathsWithLanguageCode = items.flatMap((item) =>
    languageCodes.map((language) => {
      const withLanguage = [language, ...item.full_slug.split('/')];

      return {
        params: {
          slug: withLanguage,
        },
      };
    })
  );

  const pathsWithoutLanguageCode = items.map((item) => ({
    params: {
      slug: item.full_slug.split('/'),
    },
  }));

  const paths = [...pathsWithLanguageCode, ...pathsWithoutLanguageCode];

  const resultPaths = paths.map((path) => {
    if (path.params.slug.includes('home') && path.params.slug.length > 1) {
      return {
        params: {
          slug: path.params.slug.slice(0, -1),
        },
      };
    }

    return path;
  });

  const fallback = false;

  return {
    paths: resultPaths,
    fallback,
  };
}
