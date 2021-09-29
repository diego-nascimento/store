import { GlobalStyles } from '../styles/GlobalStyles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import * as GTM from '../Util/GTM'
import { StepProvider } from '../contexts/cartStep'
import { FreteProvider } from '../contexts/freteContexts'
import { PagamentoProvider } from '../contexts/pagamentoContexts'
import '../styles/styles-compiled.css'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../contexts/Auth'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      GTM.event({
        event: 'pageview',
        url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AuthProvider>
      <PagamentoProvider>
        <FreteProvider>
          <StepProvider>
            <Provider store={store}>
              <GlobalStyles />
              <Component {...pageProps} />
            </Provider>
          </StepProvider>
        </FreteProvider>
      </PagamentoProvider>
    </AuthProvider>
  )
}

export default App
