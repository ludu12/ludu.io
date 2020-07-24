import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/layout/layout';
import { getUses } from '../lib/uses';

export const getStaticProps: GetStaticProps = async () => {
  const uses = await getUses();

  return {
    props: {
      uses,
    },
  };
};

interface UsesProps {
  uses: {
    title: string;
    description: string;
    lastUpdated: string;
    contentHtml: string;
  };
}

const Uses: React.FC<UsesProps> = (props) => {
  const { uses } = props;
  return (
    <Layout siteTitle="Resume">
      <h1>{uses.title}</h1>
      <main>
        <p>{uses.description}</p>
        <div dangerouslySetInnerHTML={{ __html: uses.contentHtml }} />
      </main>
    </Layout>
  );
};

export default Uses;
