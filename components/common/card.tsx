import React from 'react';
import styled from 'styled-components';
import { Paper, Row } from '../shared-styled';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TitleBar = styled(Row)`
  padding: 0 0 0.5rem 0;
`;

const Title = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Content = styled.div`
  flex: 1;
  height: 7.5em;
  min-width: 15em;
`;

const Card: React.FC<CardProps> = (props) => {
  const { title, children } = props;
  return (
    <Paper>
      <Content>
        <TitleBar>
          <Title>{title}</Title>
          {props.icon}
        </TitleBar>
        {children}
      </Content>
    </Paper>
  );
};

export default Card;
