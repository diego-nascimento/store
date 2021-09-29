import React from 'react'
import { Container, TitleText } from './TItle.style'

interface ITitle {
  text: string
}

const Title: React.FC<ITitle> = ({ text }:ITitle) => {
  return (
    <Container>
      <TitleText>
        {text}
      </TitleText>
    </Container>
  )
}

export default Title
