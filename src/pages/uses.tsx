import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/layout/layout';
import { getUses } from '../lib/uses';
import { Headline, Italic } from '../components/shared-styled';
import DateFormat from '../components/common/date-format';

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
    <Layout title="Uses">
      <Headline>{uses.title}</Headline>
      <main>
        <Italic>
          Last Updated <DateFormat dateString={uses.lastUpdated} />
        </Italic>
        <p className={'py-4'}>{uses.description}</p>
        <div  className={'unreset'} dangerouslySetInnerHTML={{ __html: uses.contentHtml }} />
      </main>
    </Layout>
  );
};

export default Uses;
