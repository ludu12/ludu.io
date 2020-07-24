import styled from 'styled-components';

export const Row = styled.div<{
  justify?: string;
  align?: string;
  grow?: boolean;
  wrap?: boolean;
}>`
  justify-content: ${(props) => props.justify || 'space-between'};
  display: flex;
  flex-direction: row;
  ${(props) => props.grow && 'flex-grow: 1;'}
  ${(props) => props.wrap && 'flex-wrap: wrap;'}
  align-items: ${(props) => props.align || 'center'};
`;

export const Column = styled.div<{
  grow?: boolean;
  maxWidth?: string;
  align?: string;
  justify?: string;
}>`
  display: flex;
  flex-direction: column;
  ${(props) => props.grow && 'flex-grow: 1;'}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  align-items: ${(props) => props.align || 'unset'};
  justify-content: ${(props) => props.justify || 'unset'};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 1em;
  border: 0.05em solid ${(props) => props.theme.main.bg3};
  border-radius: 0.2em;
`;

export const Item = styled.div`
  flex: 1;
`;

export const Paper = styled.div`
  display: flex;
  overflow: hidden;
  padding: 1em;
  margin: 0.25em;
  border: 0.05em solid ${(props) => props.theme.main.bg3};
  border-radius: 0.2em;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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

export const Strong = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0.5em;
`;

export const LargeMedia = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }
`;
