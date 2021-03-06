import styled from 'styled-components';

export const DashboardBackground = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color ${({theme}) => theme.colors.backgroundLight};
`
export const BodyContainer = styled.main`
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: space-between;

`

export const InlineTitle = styled.div`
  display: flex;
  width: 100%;
`

export const InlineContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  div{
    flex: 4;
    margin-right: 20px
  };

  button{
    flex: 1;
  };
`
