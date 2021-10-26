import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

const data_science = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Intro to Data Science">
      <h1>Intro to Data Science</h1>
      <h3>Harnessing the power of data opens new possibilities.</h3>
      <IndexSection title="Core modules">
        <IndexItemList lessonTopic={filter('data_science')} />
      </IndexSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default data_science;
