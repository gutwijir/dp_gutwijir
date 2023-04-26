import Head from 'next/head'
import type { FC } from 'react'

import { env, isDev } from '@/src/utils/env'

const baseUrl = isDev ? 'http://localhost:3000' : env('NEXT_PUBLIC_API_URL')

export const DefaultHead: FC = () => (
  <Head>
    <meta charSet="UTF-8" />
    <title>ooolab</title>
    <meta
      name="description"
      content="A platform that allows logged in users to watch, comment and export video streams of usability testing in a specialized lab."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="ooolab" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={baseUrl} />
    <meta property="og:image" content={`${baseUrl}/share-banner.png`} />
  </Head>
)
