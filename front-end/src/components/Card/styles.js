import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  width: ${(props) => props.width};
  heigth: ${(props) => props.width};
  background: ${({theme}) => theme.colors.background};

  ${(props) => !props.noShadown && css`
    box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
  `};

  border-radius: 20px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5000;
`
