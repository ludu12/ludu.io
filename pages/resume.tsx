import React from 'react';
import Layout from '../components/layout';
import { GetStaticProps } from 'next';
import { getResume } from '../lib/resume';
import Date from '../components/date';
import { Italic, Row, Thumbnail } from '../components/shared/shared-styled';

export const getStaticProps: GetStaticProps = async () => {
  const resume = await getResume();

  return {
    props: {
      resume,
    },
  };
};

interface ResumeProps {
  resume: {
    title: string;
    lastUpdated: string;
    image: string;
    contentHtml: string;
  };
}

const Resume: React.FC<ResumeProps> = (props) => {
  const { resume } = props;
  return (
    <Layout siteTitle="Resume">
      <h1>{resume.title}</h1>
      <Row justify="flex-start">
        <Thumbnail src={resume.image} alt={resume.image} />
        <Italic>
          Last Updated <Date dateString={resume.lastUpdated} />
        </Italic>
      </Row>
      <div dangerouslySetInnerHTML={{ __html: resume.contentHtml }} />
    </Layout>
  );
};

export default Resume;
