import * as SC from './Nav.style'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import {
  FaInstagram,
  FaWhatsapp,
  FaShoppingBag,
  FaSearch,
} from 'react-icons/fa'
import Link from 'next/link'
import { connect } from 'react-redux'
import { ICategoria } from '../../typing/Interfaces/ICategoria'
import MenuMobile from '../MenuMobile/MenuMobile'
import {
  IInformacoesBase,
  PaginaInicialDataType,
} from '../../typing/Interfaces/IHomePage'
import { MegaMenu } from '../MegaMenu'
import { AuthButton } from '../AuthButton'

interface INav {
  tamanhoCarrinho: number
  carrinho?: boolean
  categorias: Array<ICategoria>
  categoriasDestaque?: Array<ICategoria>
  PaginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
}

const Nav: React.FC<INav> = ({
  tamanhoCarrinho,
  carrinho,
  categorias,
  categoriasDestaque,
  PaginaInicialData,
  InformacoesBase,
}: INav) => {
  const [MenuState, setMenuState] = React.useState(false)
  const [MenuBackGround, setMenuBackground] = React.useState(false)
  const [search, setSearch] = React.useState<string>('')
  const [MegaMenuState, setMegaMenuState] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkPageOffSet = () => {
      window.addEventListener('scroll', () => {
        window.pageYOffset < 1
          ? setMenuBackground(false)
          : setMenuBackground(true)
      })
    }
    checkPageOffSet()
  }, [])

  return (
    <SC.Wrapper>
      <SC.ContainerHeader MenuBackground={MenuBackGround}>
        <SC.Container className='Container'>
          <SC.Message>
            {PaginaInicialData.mensagem && (
              <span>{PaginaInicialData.mensagem}</span>
            )}
          </SC.Message>
          <SC.RedesSociais>
            {PaginaInicialData.instagram && (
              <li>
                <Link href={PaginaInicialData.instagram}>
                  <a target='blank'>
                    <FaInstagram />
                  </a>
                </Link>
              </li>
            )}

            {PaginaInicialData.whatsapp && (
              <li>
                <Link href={PaginaInicialData.whatsapp}>
                  <a target='blank'>
                    <FaWhatsapp />
                  </a>
                </Link>
              </li>
            )}
          </SC.RedesSociais>
        </SC.Container>
      </SC.ContainerHeader>

      <SC.Navegacao MenuBackground={MenuBackGround}>
        <SC.ContainerNav className='Container'>
          <FiMenu
            onClick={() => setMenuState(!MenuState)}
            className='BotaoMenu'
          />
          <MenuMobile
            MenuState={MenuState}
            SetMenuState={setMenuState}
            categorias={categorias}
          />
          <SC.Lista MenuState={MenuState}>
            <li>
              <Link href='/'>
                {InformacoesBase.logo ? (
                  <img src='' alt='' />
                ) : (
                  <h1>{InformacoesBase.nomeLoja}</h1>
                )}
              </Link>
            </li>
          </SC.Lista>
          <SC.RightSide>
            <SC.BuscaContainer>
              <SC.Busca
                placeholder='Encontre seu produto'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link href={`/busca/${search}`}>
                <SC.ButtonSearch>
                  <FaSearch />
                </SC.ButtonSearch>
              </Link>
            </SC.BuscaContainer>
            <AuthButton />
            {!carrinho ? (
              <Link href='/carrinho'>
                <a className='CarrinhoButton'>
                  <FaShoppingBag className='Cart' />
                  {tamanhoCarrinho > 0 ? <p>{tamanhoCarrinho} </p> : null}
                </a>
              </Link>
            ) : null}
          </SC.RightSide>
        </SC.ContainerNav>
        <SC.Categorias>
          <SC.ListaCategorias className='Container'>
            <SC.CategoriaItem
              onMouseOver={() => setMegaMenuState(true)}
              onMouseOut={() => setMegaMenuState(false)}
            >
              <FiMenu style={{ cursor: 'pointer' }} />
              <p style={{ fontSize: '1rem', cursor: 'pointer' }}>
                Compre por toda loja
              </p>
              <MegaMenu categorias={categorias} MegaMenuState={MegaMenuState} />
            </SC.CategoriaItem>
            {categoriasDestaque &&
              categoriasDestaque.map((categoria) => {
                return (
                  <Link
                    href={`/categoria/${categoria.id}?categoria=${categoria.Nome}`}
                    key={categoria.id}
                  >
                    <a>
                      <SC.CategoriaItem key={categoria.id}>
                        <p>{categoria.Nome}</p>
                      </SC.CategoriaItem>
                    </a>
                  </Link>
                )
              })}
          </SC.ListaCategorias>
        </SC.Categorias>
      </SC.Navegacao>
      <SC.BuscaContainerMobile>
        <SC.Busca
          placeholder='Encontre seu produto'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={`/busca/${search}`}>
          <SC.ButtonSearch>
            <FaSearch />
          </SC.ButtonSearch>
        </Link>
      </SC.BuscaContainerMobile>
    </SC.Wrapper>
  )
}

const mapStateToProps = (state: any) => ({
  tamanhoCarrinho: state.cart.length,
})

export default connect(mapStateToProps)(Nav)
