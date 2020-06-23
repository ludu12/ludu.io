import styled from 'styled-components';

export const Row = styled.div<{ justify?: string; align?: string }>`
  justify-content: ${(props) => props.justify || 'space-between'};
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || 'center'};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 1em;
  border: 0.05em solid ${props => props.theme.main.bg3};
  border-radius: 0.2em;
`;

export const Button = styled.button`
  padding: 0.4em;
  color: ${(props) => props.theme.neturals.white};
  background-color: ${(props) => props.theme.main.primary};
  border: 0;
  border-radius: 0.2em;
  transition: all 0.25s;
  cursor: pointer;
 
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.neturals.gray};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 1em 0;
`;

export const ListLink = styled.a`
  font-size: 1.5em;
`;

export const Thumbnail = styled.img`
  height: 2em;
  width: 2em;
  border-radius: 1em;
  margin: 0 1em 0 0;
`;

export const Italic = styled.i`
  color: ${(props) => props.theme.neturals.gray};
`;
