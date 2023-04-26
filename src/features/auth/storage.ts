import type { UserType } from './contexts/auth'
import { StorageType, storageWrapper } from './storageWrapper'

let { getItem, setItem, removeItem, clear } = storageWrapper(
  StorageType.LOCAL_STORAGE
)

export const getToken = () => getItem('JWTtoken') ?? null

export const setToken = (token: string) => {
  setItem('JWTtoken', token)
}

export const removeToken = () => {
  removeItem('JWTtoken')
}

export const getPersistedUser = () => {
  const persistedUser = getItem('user')
  return persistedUser ? (JSON.parse(persistedUser) as UserType) : null
}

export const setPersistedUser = (user: UserType) => {
  setItem('user', JSON.stringify(user))
}

export const removePersistedUser = () => {
  removeItem('user')
}

export const getPersistedResizeEnd = () => {
  const resizeEnd = Number(getItem('resizeEnd'))
  return isFinite(resizeEnd) ? resizeEnd : null
}

export const setPersistedResizeEnd = (resizeEnd: number) => {
  setItem('resizeEnd', String(resizeEnd))
}

export const removePersistedResizeEnd = () => {
  removeItem('resizeEnd')
}

export const removePersistedAll = () => {
  clear()
}
