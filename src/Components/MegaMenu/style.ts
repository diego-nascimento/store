import styled from 'styled-components'

interface ContainerProps {
  MegaMenuState: boolean
}

export const Container = styled.nav<ContainerProps>`
  background: white;
  position: absolute;
  width: 80vw;
  max-width: 1000px;
  top: 40px;
  left: 10px;
  transition: .2s;
  visibility: ${props => props.MegaMenuState ? 'visible' : 'hidden'};
  transform:${props => props.MegaMenuState ? 'translateY(0px)' : 'translateY(-10px)'} ;
  opacity: ${props => props.MegaMenuState ? '1' : '0'} ;
  padding: 10px 10px;
  border-radius: 7px;
  border: 1px solid #999;
`

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

export const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1rem;
`

export const CategoriasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  grid-gap: 10px;

`
export const CategoriaItem = styled.div`
  width: 100%;

  p{
    font-size: .8rem;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }
  
`
