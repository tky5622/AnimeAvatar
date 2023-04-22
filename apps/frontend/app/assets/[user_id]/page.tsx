'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { ImageUploadContainer } from '../../../src/components/generator/ImageUploaderContainer'
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { SettingForm } from '../../../src/components/generator/SettingForm';
import { AvatarCard } from 'ui';
import Link from 'next/link';
// import Head from 'next/head'
// import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <Container>
      {/* this section only appear when progressing generation */}
      {true && <SimpleGrid><AvatarCard/></SimpleGrid>}
      <SimpleGrid>
        <Link href={'editor/avatar_id'}>
          <AvatarCard/>
        </Link>
      </SimpleGrid>
    </Container>
  )
}

export default Home




