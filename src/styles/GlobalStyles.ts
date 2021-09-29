import { createGlobalStyle } from 'styled-components'
import { styles } from './styles'
import { ImageShowUp, PBottomTop } from '../styles/Keyframes'

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0px;
    outline: 0px;
    margin: 0px;
    box-sizing: border-box;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

#__next {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

html{
  font-size: 100%;
}

  
  body{
    background: #eee;
    overflow: hidden;
    overflow-y: scroll;
    height: 100%;
    color: ${styles.fontColor};
  
    p, h1, h2, a{
      color :${styles.fontColorDest};
    }

    h1{
      font-size: 1.5rem;
      line-height: 2rem;
    }

    h2{
      font-size: .9rem;
      line-height: 1.2rem;
    }

    p, a, span,  b{
      font-size: 1rem;
      line-height: 1.4rem;
    }

    li{
      font-size: 1rem;
    }

    button{
      cursor: pointer;
    }

    svg{
      font-size: 1.5em;
    }

    section{
      padding: 100px 0px;
    }

    p{
      animation: ${PBottomTop} .5s forwards;
    }

    

    @media  (max-width: 800px){
      section{
        padding: 20px 0px;
      }

      h1{
        font-size: 1.2rem;
        line-height: 1.6rem;
      }

      p, a, span, li, b{
        font-size: .8rem;
        line-height: 1.2rem;
        background: transparent;
      }   
    }
  }

  .carousel-control-prev-icon,
.carousel-control-next-icon {
  svg{
    background: red;
  }
}

  .Container{
    width: 100%;
    max-width: 1500px;
  }

  a{
    cursor: pointer;
    text-decoration: none;
    color: initial;
    
    :hover{
      text-decoration: none;
      color: initial;
    }
  }

  img{
    animation: ${ImageShowUp({ opacity: 1 })} .5s forwards;
  }

  .PageContainer{
    animation: ${ImageShowUp({ opacity: 1 })} .5s forwards;
  }
`
