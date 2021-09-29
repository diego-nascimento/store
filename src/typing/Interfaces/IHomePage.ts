import { ICategoria } from './ICategoria'
import { IImagem } from './IImagem'

export type BannerType = {
  id: number
  imagem: IImagem
  alt: string
  url: string
  imagemMobile: IImagem
}

export type PromoType = {
  imagem: IImagem,
  alt: string
  url: string
  tituloBaixo?: string
  descBaixo: string
  imagemMobile: IImagem
}

export type PromosType = {
  id: number
  titulo: string
  Promo: PromoType[]
  categoria: ICategoria
}

export interface PaginaInicialDataType {
  whatsapp: string
  instagram: string
  mensagem: string
  Banners: BannerType[]
  Promos: PromosType[]
}

export interface IInformacoesBase{
  nomeLoja: string,
  logo: IImagem
}
