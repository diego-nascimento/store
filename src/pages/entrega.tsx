import Head from 'next/head'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import { GetFactory } from '../Factory/http/GetFactory'
import { SobreContainer, Container, InfoContainer, ImageContainer } from '../styles/PageStyles/entrega.style'
import { ICategoria } from '../typing/Interfaces/ICategoria'
import { IInformacoesBase, PaginaInicialDataType } from '../typing/Interfaces/IHomePage'

interface IEntrega{
  categoriasDestaque: Array<ICategoria>
  paginaInicialData: PaginaInicialDataType
  InformacoesBase: IInformacoesBase
  categorias: Array<ICategoria>
}

const Entrega: React.FC<IEntrega> = ({ categorias, categoriasDestaque, paginaInicialData, InformacoesBase }) => (
  <Layout categorias={categorias} categoriasDestaque={categoriasDestaque} PaginaInicialData={paginaInicialData} InformacoesBase={InformacoesBase}>
    <Head>
      <title>Libido LoveShop- Entregas</title>
    </Head>
    <SobreContainer>
      <Container className="Container">
        <ImageContainer>
          <img src="/delivery-sexshop-pirauba.png" alt="delivery-sexshop-pirauba" />
        </ImageContainer>
        <InfoContainer>
          <h1>Entregas: </h1>
          <p>
            Nossos clientes merecem todo o conforto e comodidade possível, e
            é baseado nisso que ofertamos FRETE GRÁTIS para todos os pedidos
            com entrega em Piraúba.
          </p>
        </InfoContainer>
      </Container>
      <Container className="Container">
        <ImageContainer>
          <img src="/localizacao-sexshop-pirauba.png" alt="localizacao-sexshop-pirauba" />
        </ImageContainer>
        <InfoContainer>
          <h1>Locais que atendemos: </h1>
          <p>
            Fazemos entrega imediata ( em até 24hrs do pedido concluído) por
            toda cidade de Piraúba mas também atendemos e entregamos
            pedidos de cidades próximas como Tocantins, Campestre, Guaraní e
            Astolfo Dutra com dia e horário combinados no horário da compra.
            Na cidade de Ubá realizamos entrega uma vez a cada mês!
          </p>
        </InfoContainer>
      </Container>
      <Container className="Container">
        <ImageContainer>
          <img src="/retirada-sexshop-pirauba.png" alt="Retiradas-sexshop-pirauba" />
        </ImageContainer>
        <InfoContainer>
          <h1>Retiradas: </h1>
          <p>
            Se por algum motivo for mais conveniente para você buscar sua
            encomenda com a gente, te recebemos respeitando todo o
            protocolo sanitário de prevenção ao COVID-19. Você escolhe tudo
            de casa e pega tudo já separado aqui no bairro Sossego!
          </p>
        </InfoContainer>
      </Container>
    </SobreContainer>
  </Layout>

)

export default Entrega

export async function getStaticProps ({ params }: any) {
  const api = GetFactory()

  const categoriasDestaque = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias?destaque=true`
  })

  const categorias = await api.handle({
    body: null,
    url: `${process.env.APIURL}/categorias`
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
      categoriasDestaque: categoriasDestaque.body,
      paginaInicialData: paginaInicialData.body,
      InformacoesBase: InformacoesBase.body,
      categorias: categorias.body
    }
  }
}
