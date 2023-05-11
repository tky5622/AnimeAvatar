'use client'

import React from 'react'
import { NextPage } from 'next/types'
import { Container } from '@mantine/core'
import { AvatarViewer } from '../../../src/components/avatar/AvatarViewer'
import { useState, useEffect } from "react";
import supabase from "../../../util/supabase-browser";
import { usePathname } from 'next/navigation';
// import Head from 'next/head'
// import Image from 'next/image'
const Avatar: NextPage = () => {
  const modelUrl = 'modelUrl//'
  const [avatar, setAvatar] = useState([]) as any;
  // const supabaseClient = useSupabaseClient()
  const path = usePathname()
  console.log(path, '@@@@@@@@@@@@@@@@@@@@@@@@')
  const parts = path?.split("/");
  let avatarId
  if (parts && parts.length > 2) {
    avatarId = parts.slice(2).join("/");
    console.log(avatarId); // "1"
  } else {
    console.log("No match found");
  }

  useEffect(() => {
    async function loadData() {
      if(process.browser) { 
      const { data } = await supabase.from('avatars').select('*').eq('avatar_id', avatarId)
      setAvatar(data as any)
      }
    }
    // Only run query once user is logged in.
    if (process.browser) loadData()
  }, [])


  return (
    <Container>
      <AvatarViewer modelUrl={avatar[0]?.avatar_url}/>
    </Container>
  )
}

export default Avatar





