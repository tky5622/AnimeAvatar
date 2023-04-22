'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { Container } from '@mantine/core'
import { AvatarViewer } from '../../../src/components/avatar/AvatarViewer'
// import Head from 'next/head'
// import Image from 'next/image'
const Avatar: NextPage = () => {
  const modelUrl = 'modelUrl//'
  return (
    <Container>
      <AvatarViewer modelUrl={modelUrl}/>
    </Container>
  )
}

export default Avatar





