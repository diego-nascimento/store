import React from 'react'
import { PostFactory } from '../Factory/http/PostFactory'
import { useRouter } from 'next/router'

interface IUser {
  nome: string
  email: string
  jwt: string
  cpf: string
}

interface ContextType {
  user: IUser | null
  Login: (data: ILogin) => Promise<void>
  error: string | null
  loading: boolean
}

type ILogin = {
  email: string
  password: string
}

const AuthContext = React.createContext({} as ContextType)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const Router = useRouter()

  React.useEffect(() => {
    const dataReturned = localStorage.getItem('userData')
    const data = dataReturned ? JSON.parse(dataReturned) : null

    if (data) {
      setUser({
        jwt: data.jwt,
        email: data.user.email,
        nome: data.user.username,
        cpf: data.user.cpf,
      })
    }
  })

  const Login = async (data: ILogin): Promise<void> => {
    try {
      setLoading(true)
      const post = PostFactory()
      const response = await post.handle({
        url: `/api/login`,
        body: {
          login: data.email,
          password: data.password,
        },
      })

      switch (response.body.user) {
        case undefined:
          setError('Usuario ou senha invalidas')
          break
        default:
          setError(null)
          localStorage.setItem('userData', JSON.stringify(response.body))
          setUser({
            jwt: response.body.jwt,
            email: response.body.user.email,
            nome: response.body.user.username,
            cpf: response.body.user.cpf,
          })
          Router.push('/')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <AuthContext.Provider value={{ user, Login, error, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
