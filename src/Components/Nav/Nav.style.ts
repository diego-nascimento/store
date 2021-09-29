import styled from 'styled-components'
import { styles } from '../../styles/styles'

interface INavegacao {
  MenuBackground: boolean
}

export const Wrapper = styled.div`
  width: 100vw;
  border-bottom: 2px solid ${styles.componentsDest};
`

export const ContainerHeader = styled.header<INavegacao>`
  height: 35px;
  background: ${styles.componentsDest};
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Message = styled.div`
  color: ${styles.fontColorInDark};
  span {
    font-weight: bold;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;

  svg {
    color: ${styles.fontColorInDark};
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100%;
  transform: translateY(10px);

  li {
    letter-spacing: 1px;
    transition: 0.3s;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0px 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :hover {
      opacity: 0.8;

      svg {
        color: ${styles.fontColorInDark};
      }
    }
  }
`

export const Navegacao = styled.nav<INavegacao>`
  background-color: ${styles.componentsColor};
  width: 100vw;
  position: relative;
  display: flex;
  top: 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 90;

  svg {
    color: ${styles.fontColor};
    width: 30px;
    height: 30px;
  }

  .BotaoMenu {
    display: none;
    z-index: 2;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    .BotaoMenu {
      display: block;
    }
  }
`

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  max-height: 60px;
  padding: 10px 20px;
  cursor: default;

  .CarrinhoButton {
    position: relative;

    .Cart {
      transition: 0.4s;
      width: 30px;
      height: 30px;
    }

    p {
      position: absolute;
      bottom: -5px;
      right: -10px;
      color: white;
      padding: 2px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.fontColorInDark};
      color: ${styles.componentsDest};
      border-radius: 50%;
      transition: 0.4s;
    }
    :hover {
      .Cart {
        color: ${styles.fontColorInDark};
      }

      p {
        background: ${styles.componentsDest};
        color: ${styles.fontColorInDark};
      }
    }
  }
`

interface ILista {
  MenuState: boolean
}

export const Lista = styled.ul<ILista>`
  display: flex;
  align-items: center;
  flex-direction: row;
  opacity: 1;
  transition: 0.5s;
  font-weight: bold;
  width: 350px;

  li {
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    letter-spacing: 1px;
    transition: 0.5;
    color: ${styles.fontColor};
    position: relative;
    top: 8px;
    cursor: pointer;

    a {
      color: ${styles.fontColor};
      transition: 0.5s;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const Categorias = styled.section`
  height: 50px;
  width: 100vw;
  padding: 0px;
  display: flex;
  background-color: #ddd;
  justify-content: center;
  border-bottom: 1px solid #bbb;

  @media (max-width: 800px) {
    display: none;
  }
`

export const ListaCategorias = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  text-transform: uppercase;
`

export const CategoriaItem = styled.li`
  height: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  flex-direction: row;
  letter-spacing: px;
  transition: 0.5;
  color: ${styles.fontColor};
  position: relative;
  font-weight: bold;
  padding: 0px 20px;

  svg {
    margin-right: 5px;
    height: 17px;
    width: 17px;
  }

  p {
    font-size: 0.8rem;
    margin: 0px;
    padding: 0px;
  }

  a {
    color: ${styles.fontColor};
    transition: 0.5s;
  }

  :hover {
    p {
      text-decoration: underline;
    }
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`

export const BuscaContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  margin-right: 10px;
  width: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`

export const BuscaContainerMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    padding: 5px 20px;
    width: 100vw;
    background: ${styles.componentsColor};
  }
`

export const Busca = styled.input`
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 10px;
  border: none;
  font-size: 0.8rem;
  width: 100%;
  color: #111;
  height: 35px;
  border: 1px solid #111;
`

export const ButtonSearch = styled.div`
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  border: 1px solid #111;
  border-left: none;

  svg {
    height: 17px;
    width: 17px;
  }
`
