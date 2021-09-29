import React from 'react'
import * as SC from './style'
import Link from 'next/link'
import { useAuth } from '../../contexts/Auth'
import { FaUser } from 'react-icons/fa'

interface IAuthButton {}

export const AuthButton: React.FC<IAuthButton> = () => {
  const [mobile, setMobile] = React.useState<boolean>(false)
  const { user } = useAuth()

  React.useEffect(() => {
    window.innerWidth < 1100 ? setMobile(true) : setMobile(false)
    window.addEventListener('resize', () => {
      window.innerWidth < 1100 ? setMobile(true) : setMobile(false)
    })
  }, [])

  return (
    <Link href='/login'>
      <SC.Wrapper>
        <SC.Container>
          <FaUser />
          {!mobile && (
            <SC.MessagesContainer>
              {user ? <p>Olá!</p> : <p>Seja bem vindo!</p>}
              {user ? <b>{user.nome}</b> : <b>Entrar</b>}
            </SC.MessagesContainer>
          )}
        </SC.Container>
      </SC.Wrapper>
    </Link>
  )
}
