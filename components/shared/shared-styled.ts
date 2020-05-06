import styled from 'styled-components';

export const Row = styled.div<{ justify?: string, align?: string }>`
  justify-content: ${props => props.justify || 'space-between'};
  display: flex;
  flex-direction: row;
  align-items: ${props => props.align || 'center'};;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 1em;
  background-color: ${props => props.theme.main.bg2};
  border-radius: 0.1em;
  box-shadow: 0 0 0.5em ${props => props.theme.main.shadow}, 0 0 1em ${props => props.theme.main.shadowVarient};
`;

export const Button = styled.button`
  padding: 0.4em;
  color: ${props => props.theme.neturals.white};
  background-color: ${props => props.theme.main.primary};
  border: 0;
  border-radius: 0.2em;  
  
  &:focus {
    outline: none;
  }
 
  &:disabled {
    background-color: ${props => props.theme.neturals.gray};
  }
`;
