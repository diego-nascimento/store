import Layout from '../Components/Layout/Layout'
import React from 'react'
import { ICategoria } from '../typing/Interfaces/ICategoria'
import Head from 'next/head'
import { GetFactory } from '../Factory/http/GetFactory'
import BannerIndex from '../Components/Banner/Banner'
import {
  IInformacoesBase,
  PaginaInicialDataType,
  PromosType,
} from '../typing/Interfaces/IHomePage'
import { Promos } from '../Components/Promotions'

interface IHome {
  categoriasDestaque: Array<ICategoria>
  PaginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
  PromosData: PromosType[]
  categorias: Array<ICategoria>
}

const Home: React.FC<IHome> = ({
  categoriasDestaque,
  PaginaInicialData,
  InformacoesBase,
  PromosData,
  categorias,
}: IHome) => {
  const [mobile, setMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    window.innerWidth < 800 ? setMobile(true) : setMobile(false)
    window.addEventListener('resize', () => {
      window.innerWidth < 800 ? setMobile(true) : setMobile(false)
    })
  }, [])

  return (
    <Layout
      categoriasDestaque={categoriasDestaque}
      PaginaInicialData={PaginaInicialData}
      InformacoesBase={InformacoesBase}
      categorias={categorias}
    >
      <Head>
        <title>Libido LoveShop - Inicio</title>
        <meta
          name='description'
          content={
            ' A LIBIDO é uma loja especializada em produtos de love shop de bom gosto e  qualidade. Nosso principal alvo é o prazer feminino!'
          }
        />
      </Head>
      <BannerIndex BannersData={PaginaInicialData.Banners} mobile={mobile} />
      <Promos Promotions={PromosData} mobile={mobile} />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const api = GetFactory()
  const categoriasdestaque = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias?destaque=true`,
  })

  const categorias = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias`,
  })

  const paginaInicialData = await api.handle({
    body: null,
    url: `${process.env.APIURL}/pagina-inicial`,
  })

  const InformacoesBase = await api.handle({
    body: null,
    url: `${process.env.APIURL}/informacoes`,
  })

  const PromosComProdutos = await Promise.all(
    paginaInicialData.body.Promos.map(async (promo: PromosType) => {
      if (promo.categoria === null) {
        return promo
      } else {
        const produtos = await api.handle({
          body: null,
          url: `${
            process.env.APIURL
          }/produtos?categorias.id=${promo.categoria.id.toString()}`,
        })

        promo.categoria.produtos = produtos.body
        return promo
      }
    })
  )

  return {
    props: {
      InformacoesBase: InformacoesBase.body,
      categoriasDestaque: categoriasdestaque.body,
      PaginaInicialData: paginaInicialData.body,
      PromosData: PromosComProdutos,
      categorias: categorias.body,
    },
  }
}
