import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  height: 46px;

  color: ${({theme}) => theme.colors.backdground};
  background: ${({theme}) => theme.colors.primary};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;

  display:flex;
  justify-content: center;
  align-items: center;

  z-index: 5000;

  &:hover {
      filter: opacity(0.8)
  }
    
  &:disabled {
      filter: opacity(0.4)
  }
`
