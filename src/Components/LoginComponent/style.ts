import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px 20px;
`

export const Formulario = styled.form`
  border: 1px solid #111;
  padding: 190px 15px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 10px 10px;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  p {
    cursor: pointer;
  }
`
