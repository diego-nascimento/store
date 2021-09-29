import React from 'react'
import { ICategoria } from '../../typing/Interfaces/ICategoria'
import * as SC from './style'
import Link from 'next/link'

interface MegaMenuProps {
  categorias: ICategoria[]
  MegaMenuState: boolean
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ categorias, MegaMenuState }) => {
  return (
    <SC.Container MegaMenuState={MegaMenuState}>
      <SC.TitleContainer>
        <SC.Title>departamentos</SC.Title>
      </SC.TitleContainer>
      <SC.CategoriasContainer>
        {categorias.map(categoria => {
          return (
            <Link href={`/categoria/${categoria.id}?categoria=${categoria.Nome}`} key={categoria.id}>
              <SC.CategoriaItem key={categoria.id}>
                <p>{categoria.Nome}</p>
              </SC.CategoriaItem>
            </Link>
          )
        })}
      </SC.CategoriasContainer>
    </SC.Container>
  )
}
