import React from 'react'
import { PromosType } from '../../typing/Interfaces/IHomePage'
import ListingProductH from '../ListingProductH/ListingProductH'
import { Promotion } from '../Promotion'

import * as SC from './style'

interface IPromos {
  Promotions: PromosType[]
  mobile: boolean
}

export const Promos: React.FC<IPromos> = ({ Promotions, mobile }) => {
  console.log(Promotions)
  return (
    <SC.Container>
      {Promotions.map(promotion => {
        if (promotion.Promo.length > 0) {
          return <Promotion promotion={promotion} key={promotion.id} mobile={mobile}/>
        } else {
          return <ListingProductH title={promotion.titulo} produtos={promotion.categoria.produtos} key={promotion.id}/>
        }
      })}
    </SC.Container>
  )
}
