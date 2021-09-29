import Head from 'next/head'
import Layout from '../../Components/Layout/Layout'
import React from 'react'
import ShowProdutos from '../../Components/ShowProducts/ShowProdutos'
import { ICategoria } from '../../typing/Interfaces/ICategoria'
import { IProduto } from '../../typing/Interfaces/IProduto'
import { GetFactory } from '../../Factory/http/GetFactory'
import { IInformacoesBase, PaginaInicialDataType } from '../../typing/Interfaces/IHomePage'

interface IAllProdutos{
  produtos: Array<IProduto>
  categorias: Array<ICategoria>
  paginaInicialData: PaginaInicialDataType
  buscado: string
  InformacoesBase: IInformacoesBase
  categoriasDestaque: Array<ICategoria>
}

const Produtos: React.FC<IAllProdutos> = ({ produtos, categorias, categoriasDestaque, paginaInicialData, buscado, InformacoesBase }:IAllProdutos) => {
  return (
    <Layout categorias={categorias} PaginaInicialData={paginaInicialData} InformacoesBase={InformacoesBase} categoriasDestaque={categoriasDestaque}>
      <Head>
        <title>Libido LoveShop - Produtos</title>
      </Head>
      {produtos && <ShowProdutos produtos={produtos}
        title={produtos.length > 0 ? `Produtos Disponiveis para ${buscado}` : `Nenhum resultado encontrado para ${buscado}`}
        categorias={categorias}/>}
    </Layout>
  )
}

export default Produtos

export async function getServerSideProps ({ params }: any) {
  const api = GetFactory()
  const responseProdutos = await api.handle({
    body: null,
    url: `${process.env.APIURL}/produtos?_where[_or][0][Nome_contains]=${params.search}&_where[_or][1][Slug_contains]=${params.search}`
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
      paginaInicialData: paginaInicialData,
      buscado: params.search,
      InformacoesBase: InformacoesBase.body,
      categoriasDestaque: categoriasdestaque.body
    }
  }
}
