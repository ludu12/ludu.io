import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { getResume } from '../lib/resume';
import DateFormat from '../components/common/date-format';
import { Headline, Italic, Thumbnail } from '../components/shared-styled';

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
      <Headline>{resume.title}</Headline>
      <main>
        <div className={'flex flex-row items-center justify-start'}>
          <Thumbnail src={resume.image} alt={resume.image}/>
          <Italic>
            Last Updated <DateFormat dateString={resume.lastUpdated}/>
          </Italic>
        </div>
        <div className={'unreset'} dangerouslySetInnerHTML={{ __html: resume.contentHtml }}/>
      </main>
    </Layout>
  );
};

export default Resume;
