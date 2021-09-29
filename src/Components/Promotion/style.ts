import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0px;

`

type PromotionProps = {
  amount: number
}

export const Promotion = styled.div<PromotionProps>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.amount}, 1fr)`};
  width: 100%;
  grid-gap: 20px;
  border-bottom: 1px solid #ccc;

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`

export const ImagemContainer = styled.div`
  width: 100%;
  transition: .3s;
  
  img{
    width: 100%;
    cursor: pointer;
    
    :hover{
      opacity: .8;
    }
  }
`

export const BottomContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 0px 5px;
   align-items: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px;

  b{
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  p{
    font-size: .9rem;
    color: #999;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }

`

export const Button = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111111;
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  p{
    padding: 0px;
    margin: 0px;
  }

  :hover{
    opacity: .8;
  }
`
