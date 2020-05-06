import styled from 'styled-components';

export const Row = styled.div<{ justify?: string }>`
  justify-content: ${props => props.justify || 'space-between'};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const Paper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 1em;
  border-radius: 0.2em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.05), 0 0 2em rgba(0, 0, 0, 0.08);
`;
