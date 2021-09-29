import { IImagem } from '../Interfaces/IImagem'
import { IProduto } from './IProduto'

export interface ICategoria{
  id: string
  Nome: string,
  Imagem: IImagem,
  banner?: IImagem
  destaque: boolean
  produtos?: IProduto[]
}
