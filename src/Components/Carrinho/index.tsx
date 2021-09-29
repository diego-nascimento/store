import React from 'react'
import { connect } from 'react-redux'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { Carousel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { Card, ImageContainer, InfoContainer } from '../../styles/PageStyles/checkout.style'
import { IProduto } from '../../typing/Interfaces/IProduto'
import * as CartActions from '../../store/modules/cart/actions'

interface ICarrinho {
  produtos: Array<IProduto>
  dispatch: any
}

const Carrinho: React.FC<ICarrinho> = ({ produtos, dispatch }:ICarrinho) => {
  const addProduto = (produto: IProduto) => {
    dispatch(CartActions.AdicionarAoCarrinho(produto))
    toast.dark('Produto Adicionado!', {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  const removeProduto = (produto: IProduto) => {
    dispatch(CartActions.RemoverDoCarrinho(produto.id))
    toast.dark('Produto Removido!', {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  return (
    <div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {produtos.map((produto) => (
        <Card style={{ padding: '30px' }} key={produto.id}>
          <ImageContainer smallSize={false}>
            <Carousel
              controls={false}
              touch
              indicators={false}
              fade
              slide
            >
              {produto.imagens
                ? produto.imagens.map((imagem) => (
                  <Carousel.Item key={imagem.id} interval={Math.floor(Math.random() * (2500 - 1800 + 1)) + 1800}>
                    <img src={imagem.url} alt={produto.Nome} />
                  </Carousel.Item>
                ))
                : (
                  <Carousel.Item key="1">
                    <img src="https://www.toptal.com/designers/subtlepatterns/patterns/repeated-square-dark.png" alt="No Image" />
                  </Carousel.Item>
                )}
            </Carousel>
          </ImageContainer>
          <InfoContainer>
            <div className="Left">
              <h2>{produto.Nome}</h2>
              {produto.pronta && <b className="Pronta">Entrega Imediata</b>}
              <p>
                Preço:
                {' '}
                {produto.saleprice && Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(produto.saleprice)}
              </p>
              <p>
                <b>
                  {produto.subtotal && Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(produto.subtotal)}
                </b>
              </p>
            </div>
            <div className="Right">
              <div className="Quantidade">
                <FaArrowUp onClick={() => { addProduto(produto) }} />
                <b>
                  {produto.quantidade}
                </b>
                <FaArrowDown onClick={() => { removeProduto(produto) }} />
              </div>
            </div>
          </InfoContainer>
        </Card>
      ))}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  produtos: state.cart.map((produto: IProduto) => ({
    ...produto,
    subtotal: produto.saleprice * (produto.quantidade ? produto.quantidade : 0)
  }))
})

export default connect(mapStateToProps)(Carrinho)
