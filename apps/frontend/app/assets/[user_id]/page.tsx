'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { ImageUploadContainer } from '../../../src/components/generator/ImageUploaderContainer'
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { SettingForm } from '../../../src/components/generator/SettingForm';
import { AvatarCard } from 'ui';
import { useEffect } from 'react';
import Link from 'next/link';
// import Head from 'next/head'
// import Image from 'next/image'
const Home: NextPage = () => {
  //TODO replace it with actual global state later
  const [isGenerating, setIsGenerating] = React.useState(true)
  const [isFinished, setIsFinished] = React.useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsGenerating(false)
      setIsFinished(true)
  }, 1000);

  }, [isGenerating])
  ////////////////////////////////////////////////////

  return (
    <Container>
      {/* this section only appear when progressing generation */}
      {isGenerating && <SimpleGrid><AvatarCard/></SimpleGrid>}
      {/* this section only appear when finished generation */}
      {isFinished && <SimpleGrid><>Finished</></SimpleGrid>}
      
      <SimpleGrid style={{marginTop: 24}}>
        <Link href={'editor/avatar_id'}>
          <AvatarCard/>
        </Link>
      </SimpleGrid>
    </Container>
  )
}

export default Home




