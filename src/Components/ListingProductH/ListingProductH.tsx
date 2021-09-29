import React from 'react'
import Slider from 'react-slick'
import { Container, ContainerCard } from './ListingProductH.style'
import ProdutoItem from '../ProdutoItem/ProdutoItem'
import { IProduto } from '../../typing/Interfaces/IProduto'
import Link from 'next/link'
import Title from '../Title'

interface IListingProductH{
  produtos: Array<IProduto>
  title: string
}

const ListingProductH: React.FC<IListingProductH> = ({ produtos, title }:IListingProductH) => {
  const settings = {
    dots: false,
    infinite: produtos.length >= 5,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: produtos.length >= 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: produtos.length >= 3,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          infinite: produtos.length >= 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: produtos.length >= 2
        }
      }
    ]
  }

  return (
    <Container>
      <Title text={title}/>
      <Slider {...settings}>
        {
          produtos.map(produto => {
            return (
              <Link href={`/produto/${produto.id}?produto=${produto.Nome}`} key={produto.id} >
                <a style={{ height: '100%' }}>
                  <ContainerCard>
                    <ProdutoItem produto={produto} width={'80%'}/>
                  </ContainerCard>
                </a>
              </Link>
            )
          })
        }
      </Slider>
    </Container>

  )
}

export default ListingProductH
