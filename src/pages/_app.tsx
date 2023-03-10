import type { AppProps } from 'next/app'
import { Short_Stack } from 'next/font/google'

import Layout from '@/components/Layout'
import { MovieContextProvider } from '@/context'

const font = Short_Stack({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <MovieContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MovieContextProvider>
    </>
  )
}
