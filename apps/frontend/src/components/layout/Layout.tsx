/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/page.tsx
/** @jsxImportSource @emotion/react */
'use client'

import { AppShell, Notification } from '@mantine/core'
// import { useAccount } from 'wagmi'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
// import { refreshAuth } from '../../libs/authentication/refresh'
// import { RegisterArtistProfile } from '../layout/RegisterArtistProfile'
// import WalletConnectModal from '../walletConnect/WalletConnectModal'
import { AppHeader } from './AppHeader'
import { FooterLinks } from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const { address, isConnected } = useAccount()
//   const profiles = useGetProfileByAddress(address)
//   const [isRegistered, setIsregistered] = useRecoilState(
//     LensIsAritistRegisterdState
//   )

//   const isLoading = useRecoilValue(LensAuthLoadingState)

  return (
    <>
      <AppShell
        padding="md"
        header={<AppHeader />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
        <FooterLinks />
      </AppShell>
    </>
  )
}

export default Layout
// const Test = () => {
//   const { data } = useDefaultProfile()
//   console.log(data, 'datatata')
//   return(<></>)
// }
