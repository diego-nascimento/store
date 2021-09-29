import React from 'react'
import Layout from '../Components/Layout/Layout'
import { LoginComponent } from '../Components/LoginComponent'
import { GetFactory } from '../Factory/http/GetFactory'
import { ICategoria } from '../typing/Interfaces/ICategoria'
import {
  IInformacoesBase,
  PaginaInicialDataType,
} from '../typing/Interfaces/IHomePage'
import { useAuth } from '../contexts/Auth'
import { useRouter } from 'next/router'

interface ILogin {
  categoriasDestaque: Array<ICategoria>
  PaginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
  categorias: Array<ICategoria>
}

const Login: React.FC<ILogin> = ({
  categoriasDestaque,
  PaginaInicialData,
  InformacoesBase,
  categorias,
}) => {
  const Router = useRouter()
  const { user } = useAuth()

  React.useEffect(() => {
    user && Router.push('/')
  }, [])
  return (
    <Layout
      categoriasDestaque={categoriasDestaque}
      PaginaInicialData={PaginaInicialData}
      InformacoesBase={InformacoesBase}
      categorias={categorias}
    >
      <LoginComponent />
    </Layout>
  )
}

export default Login

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

  return {
    props: {
      InformacoesBase: InformacoesBase.body,
      categoriasDestaque: categoriasdestaque.body,
      PaginaInicialData: paginaInicialData.body,
      categorias: categorias.body,
    },
  }
}
