import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { getResume } from '../lib/resume';
import DateFormat from '../components/common/date-format';
import { Italic, Row, Thumbnail } from '../components/shared-styled';

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
    <Layout title="Resume">
      <h1>{resume.title}</h1>
      <main>
        <Row justify="flex-start">
          <Thumbnail src={resume.image} alt={resume.image} />
          <Italic>
            Last Updated <DateFormat dateString={resume.lastUpdated} />
          </Italic>
        </Row>
        <div dangerouslySetInnerHTML={{ __html: resume.contentHtml }} />
      </main>
    </Layout>
  );
};

export default Resume;
