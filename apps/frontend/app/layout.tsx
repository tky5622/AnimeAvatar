'use client'
/* eslint-disable no-constant-condition */
// import { ApolloProvider } from '@apollo/client'
// import { ColorScheme, ColorSchemeProvider } from '@mantine/core'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
// import { layoutApolloClient } from '../../apollo-client'
import Layout from '../src/components/layout/Layout'
// import WalletConnect from '../component/walletConnect/WalletConnectModal'
// import '../libs/firebase'; // Initialize FirebaseApp
// import RecoilProvider from '../recoil/RecoilProvider'
// import '../styles/globals.css'
// import '../styles/player.css'
// import RootStyleRegistry from './emotion'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  // const toggleColorScheme = (value?: ColorScheme) =>
  //   console.log(value || ('dark' === 'dark' ? 'dark' : 'dark'))
  // both en and jp
  return (
    <html lang="en">
      <Head>
        <title>Next.js</title>
      </Head>
      <body>
        <Layout>       
           {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
