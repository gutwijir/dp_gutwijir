// src/utils/env.ts
const variables = {
  NODE_ENV: process.env.NODE_ENV,

  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,

  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
} as const

const env = (name: keyof typeof variables) => {
  const value = variables[name]

  if (typeof value === 'string') {
    return value
  }

  throw new Error(`Missing ${name} environment variable`)
}

const isDev = env('NODE_ENV') === 'development'

export { env, isDev }
