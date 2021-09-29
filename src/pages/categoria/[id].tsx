import React from 'react'
import Head from 'next/head'
import Layout from '../../Components/Layout/Layout'
import ShowProdutos from '../../Components/ShowProducts/ShowProdutos'
import { GetFactory } from '../../Factory/http/GetFactory'
import { ICategoria } from '../../typing/Interfaces/ICategoria'
import { IProduto } from '../../typing/Interfaces/IProduto'
import { Banner } from '../../styles/PageStyles/categorias.style'
import { IInformacoesBase, PaginaInicialDataType } from '../../typing/Interfaces/IHomePage'

interface IAllProdutos{
  produtos: Array<IProduto>
  categorias: Array<ICategoria>
  categoria: ICategoria
  paginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
  categoriasDestaque: Array<ICategoria>
}

const ProdutoCategoria: React.FC<IAllProdutos> = ({ produtos, categorias, categoria, categoriasDestaque, paginaInicialData, InformacoesBase }:IAllProdutos) => {
  return (
    <Layout categorias={categorias} PaginaInicialData={paginaInicialData} InformacoesBase={InformacoesBase} categoriasDestaque={categoriasDestaque}>
      <Head>
        <title>{categoria && categoria.Nome} | Libido LoveShop</title>
        <meta name="keywords" content={`${categoria && categoria.Nome}`}></meta>
      </Head>
      { categoria && categoria.banner && <Banner>
        <img src={categoria.banner.url} alt={categoria.Nome} />
      </Banner>}
      {categoria && <ShowProdutos produtos={produtos} title={categoria.Nome} categorias={categorias}/>}
    </Layout>
  )
}

export default ProdutoCategoria

export async function getServerSideProps ({ params }: any) {
  const api = GetFactory()
  const responseProdutos = await api.handle({
    body: null,
    url: `${process.env.APIURL}/produtos?categorias.id=${params.id}`
  })
  const categorias = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias?destaque=true`
  })
  const responseCategoriaAtual = await api.handle({
    url: `${process.env.APIURL}/categorias/${params.id}`,
    body: null
  })

  const paginaInicialData = await api.handle({
    body: null,
    url: `${process.env.APIURL}/pagina-inicial`
  })

  const InformacoesBase = await api.handle({
    body: null,
    url: `${process.env.APIURL}/informacoes`
  })

  const categoriasdestaque = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias?destaque=true`
  })

  return {
    props: {
      categorias: categorias.body,
      produtos: responseProdutos.body,
      categoria: responseCategoriaAtual.body,
      paginaInicialData: paginaInicialData.body,
      InformacoesBase: InformacoesBase.body,
      categoriasDestaque: categoriasdestaque.body
    }
  }
}
