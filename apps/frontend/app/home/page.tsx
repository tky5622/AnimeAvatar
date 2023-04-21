'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { HeroImage } from '../../src/components/home/HeroImage'
import { AvatarContainer } from '../../src/components/home/AvatarContainer'
// import Head from 'next/head'
// import Image from 'next/image'
import { Container } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <Container>
      <HeroImage/>
      <AvatarContainer/>
    </Container>
  )
}

export default Home





