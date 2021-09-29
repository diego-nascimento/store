import React from 'react'
import Layout from '../Components/Layout/Layout'
import { GetFactory } from '../Factory/http/GetFactory'
import { Container } from '../styles/PageStyles/404.style'
import { ICategoria } from '../typing/Interfaces/ICategoria'
import { IInformacoesBase, PaginaInicialDataType } from '../typing/Interfaces/IHomePage'

interface I404{
  categorias: Array<ICategoria>
  PaginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
}

const Page404: React.FC<I404> = ({ categorias, PaginaInicialData, InformacoesBase }: I404) => {
  return (
    <Layout categorias={categorias} PaginaInicialData={PaginaInicialData} InformacoesBase={InformacoesBase}>
      <Container>
        <h1>Pagina Não Encontrada</h1>
      </Container>
    </Layout>
  )
}

export default Page404

export async function getStaticProps ({ params }: any) {
  const api = GetFactory()

  const categorias = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias?destaque=true`
  })

  const paginaInicialData = await api.handle({
    body: null,
    url: `${process.env.APIURL}/pagina-inicial`
  })

  const InformacoesBase = await api.handle({
    body: null,
    url: `${process.env.APIURL}/informacoes`
  })

  return {
    props: {
      InformacoesBase: InformacoesBase.body,
      categoriasDestaque: categorias.body,
      PaginaInicialData: paginaInicialData.body
    }
  }
}
