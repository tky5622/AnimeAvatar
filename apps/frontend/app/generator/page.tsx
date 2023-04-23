'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { ImageUploadContainer } from '../../src/components/generator/ImageUploaderContainer'
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { SettingForm } from '../../src/components/generator/SettingForm';
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation';

// import Head from 'next/head'
// import Image from 'next/image'



const Home: NextPage = () => {
  const [images, setImages] = useState<string[]>([])
  const router = useRouter()
  const onSubmitImages = useCallback(() => {
    console.log(images)
    router.push('/assets/user_id')
    // post images to backend

  }, [router, images])

  return (
    <Container>
      <Grid columns={18}>
        <Grid.Col xs={18} lg={12}>
          <ImageUploadContainer images={images} setImages={setImages}/>
        </Grid.Col>
        <Grid.Col xs={18} lg={6}>
          <SettingForm onClick={onSubmitImages}/>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Home





