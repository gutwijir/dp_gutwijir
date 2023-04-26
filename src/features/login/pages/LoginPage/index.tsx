import { useLazyQuery } from '@apollo/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Route } from 'nextjs-routes'
import { route } from 'nextjs-routes'
import type { FormEvent } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

import { useAuthContext } from '@/src/features/auth/contexts/auth'
import { setPersistedUser, setToken } from '@/src/features/auth/storage'
import { LockIcon } from '@/src/features/ui/icons/LockIcon'
import { UserIcon } from '@/src/features/ui/icons/UserIcon'
import { LoginLayout } from '@/src/features/ui/LoginLayout'
import { LOGIN } from '@/src/graphql/queries'

import { useLoginRedirect } from './hooks/useLoginRedirect'
import { H2, Label, LoginForm, LoginFormWrapper, SubmitButton } from './styled'

export const LoginPage: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [passwd, setPassword] = useState<string>('')

  const { setUser } = useAuthContext()

  const router = useRouter()

  useLoginRedirect(route({ pathname: '/' }) as unknown as Route)

  const [loginUser /*{ loading }*/] = useLazyQuery(LOGIN, {
    variables: {
      username: username,
      password: passwd,
    },
    onCompleted: (res: { login: string }) => {
      setToken(res.login)
      setUser({
        username: username,
        /* for testing purposes --> */ roles: [
          /*UserRole.MODERATOR*/
        ],
      })
      setPersistedUser({
        username: username,
        /* for testing purposes --> */ roles: [
          /*UserRole.MODERATOR*/
        ],
      })
      void router.push('/')
    },
    onError(error) {
      console.log(error)
    },
  })

  const onSubmit = useCallback(
    async function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      await loginUser()
    },
    [loginUser]
  )

  return (
    <LoginLayout>
      <LoginFormWrapper>
        <H2 data-cy="heading">Sign in</H2>
        <LoginForm onSubmit={onSubmit}>
          <Label>
            <UserIcon width={32} height={32} />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              autoComplete="username"
              onChange={(ev) => {
                setUsername(ev.target.value)
              }}
              data-cy="usernameInput"
            />
          </Label>
          <Label>
            <LockIcon />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={passwd}
              autoComplete="current-password"
              onChange={(ev) => {
                setPassword(ev.target.value)
              }}
              data-cy="passwordInput"
            />
          </Label>
          <SubmitButton type="submit" value="Login" name="submit" />
        </LoginForm>
      </LoginFormWrapper>
    </LoginLayout>
  )
}
