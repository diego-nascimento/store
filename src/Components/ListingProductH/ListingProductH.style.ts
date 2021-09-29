import styled from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 20px 0px;

  @media(max-width: 800px){
    padding: 20px 5%;
  }

  h1{
    text-align: center;
    padding: 0px;
  }

  @media(max-width: 800px){
    margin-top: 0px;
  }
`

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
