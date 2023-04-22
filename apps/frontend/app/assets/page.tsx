'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { ImageUploadContainer } from '../../src/components/generator/ImageUploaderContainer'
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { SettingForm } from '../../src/components/generator/SettingForm';

// import Head from 'next/head'
// import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <Container>
      <Grid columns={18}>
        <Grid.Col xs={18} lg={12}>
          <ImageUploadContainer/>
        </Grid.Col>
        <Grid.Col xs={18} lg={6}>
          <SettingForm/>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Home




