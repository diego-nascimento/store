import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container } from './Banner.style'
import Link from 'next/link'
import { BannerType } from '../../typing/Interfaces/IHomePage'

interface IBanner {
  BannersData: Array<BannerType>
  mobile: boolean
}

const Banner: React.FC<IBanner> = ({ BannersData, mobile }) => {
  console.log(BannersData)
  return (
    BannersData && Array.isArray(BannersData) && BannersData.length > 0
      ? <Container className='Container'>
        <Carousel
          controls={true}
          touch={true}
          indicators={true}
          slide={true}
          interval={5000}

        >
          {BannersData.map((banner) => {
            return (
              <Carousel.Item key={banner.id}>
                {banner.imagem !== null &&
                  <Link href={banner.url}>
                    <a style={{ width: '100%', cursor: 'pointer' }} target='blank'>
                      <img src={mobile && banner.imagemMobile ? banner.imagemMobile.url : banner.imagem.url} alt={banner.alt} />
                    </a>
                  </Link>
                }

              </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
      : null
  )
}

export default Banner
