export enum StorageType {
  LOCAL_STORAGE = 'localStorage',
  SESSION_STORAGE = 'sessionStorage',
}

export const storageWrapper = (storageType: StorageType) => {
  let inMemoryStorage: { [key: string]: string } = {}

  const isSupported = (): boolean => {
    if (typeof window[storageType] === 'undefined') {
      return false
    }
    try {
      let storage = window[storageType]
      storage.setItem('test', 'test')
      storage.removeItem('test')
      return true
    } catch (e) {
      return false
    }
  }

  const getItem = (key: string): string | null => {
    if (isSupported()) {
      return window[storageType].getItem(key) ?? null
    }
    return inMemoryStorage[key] ?? null
  }

  const setItem = (key: string, value: string): void => {
    if (isSupported()) {
      window[storageType].setItem(key, value)
    } else {
      inMemoryStorage[key] = value
    }
  }

  const removeItem = (key: string): void => {
    if (isSupported()) {
      window[storageType].removeItem(key)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete inMemoryStorage[key]
    }
  }

  const clear = (): void => {
    if (isSupported()) {
      window[storageType].clear()
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  }
}
