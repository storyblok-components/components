import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../components/Page';
import Layout from '../components/Layout';
import Storyblok from '../lib/storyblok-client';
import useStoryblok from '../lib/storyblok-hook';

const Editor = () => {
  const router = useRouter();
  const [story, setStory] = useStoryblok(null);

  useEffect(() => {
    (async () => {
      const newURL = new URL(`mock:mock${router.asPath}`);
      const pathParam = newURL.searchParams.get('path');
      const versionInEditor = newURL.searchParams.get('version');
      const openWithPublished = newURL.searchParams.get('_storyblok_published');

      let version;
      if (openWithPublished) {
        version = 'published';
      } else if (versionInEditor) {
        version = 'published';
      } else {
        version = 'draft';
      }

      const fullSlug = pathParam === '/' ? 'home' : pathParam;

      try {
        const {
          data: { story },
        } = await Storyblok.get(`cdn/stories/${fullSlug}`, {
          resolve_relations: 'featured-articles.articles',
          version,
        });

        setStory(story);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <Layout>{story && <Page content={story.content} />}</Layout>;
};

export default Editor;
