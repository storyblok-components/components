import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Storyblok from '../lib/storyblok-client';

const Index = ({ story }) => {
  console.log('whatever');
  return <Layout>{story && <Page content={story.content} />}</Layout>;
};

export default Index;

export async function getStaticProps() {
  try {
    const {
      data: { story },
    } = await Storyblok.get(`cdn/stories/home`, {
      resolve_relations: 'featured-articles.articles',
    });

    return {
      props: {
        story,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
