import React from 'react';
import styled from 'styled-components';
import { AudibleBook } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { Column, Item, Row } from '../shared-styled';
import { FaAudible } from 'react-icons/fa';

interface AudibleCardProps {
  book: AudibleBook;
}

const Description = styled.small`
  padding: 0.25em 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Content = styled.div``;

const AudibleCard: React.FC<AudibleCardProps> = (props) => {
  const { book } = props;

  if (!book) {
    return null;
  }

  return (
    <Item>
      <Card title="Current Audible Book" icon={<FaAudible />}>
        <Row align="flex-start" justify="flex-start">
          <CoverArt cover={book.cover} title={book.title} />
          <Content>
            <Column>
              <a href={book.link}>
                <strong>{book.title}</strong>
              </a>
              <small>
                <i>By {book.author}</i>
              </small>
            </Column>
            <Description title={book.mySummary}>{book.mySummary}</Description>
          </Content>
        </Row>
      </Card>
    </Item>
  );
};

export default AudibleCard;
