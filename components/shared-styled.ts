import styled from 'styled-components';

export const Row = styled.div<{ justify?: string }>`
  justify-content: ${props => props.justify || 'space-between'};
  display: flex;
  flex-direction: row;
`;
