import React from 'react'
import { PromosType } from '../../typing/Interfaces/IHomePage'
import Title from '../Title'
import * as SC from './style'
import Link from 'next/link'

interface IPromotion {
  promotion: PromosType
  mobile: boolean
}

const textos: string[] = [
  'Eu quero!',
  'Confira',
  'Comprar'
]

export const Promotion:React.FC<IPromotion> = ({ promotion, mobile }) => {
  return (
    <SC.Container className='Container'>
      {promotion.titulo !== '' && <Title text={promotion.titulo}/>}
      <SC.Promotion amount={promotion.Promo.length}>
        {promotion.Promo.map(promo => {
          return (
            <SC.ImagemContainer key={promo.imagem.id}>
              <Link href={promo.url} >
                <img src={mobile && promo.imagemMobile !== null ? promo.imagemMobile.url : promo.imagem.url} alt={promo.alt} />
              </Link>
              <SC.BottomContainer>
                <SC.InfoContainer>
                  <b>{promo.tituloBaixo}</b>
                  <p>{promo.descBaixo}</p>
                </SC.InfoContainer>
                {promo.tituloBaixo && promo.descBaixo && <SC.Button>
                  <p>{textos[(parseInt((Math.random() * 2).toFixed(0)))]}</p>
                </SC.Button>}
              </SC.BottomContainer>
            </SC.ImagemContainer>
          )
        })}
      </SC.Promotion>
    </SC.Container>
  )
}
