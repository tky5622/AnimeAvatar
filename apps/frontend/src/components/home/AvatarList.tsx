'use client'
import { AvatarCard } from "ui";
import Link from 'next/link'
import supabase from "../../../util/supabase-browser";
import { useState, useEffect } from "react";
// import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
const AVATAR_URL = "/avatar/1"


export function AvatarList() {
    //TODO replace this onclick function 
    // pass it from above components    
    const [avatars, setAvatars] = useState([]);
    // const supabaseClient = useSupabaseClient()

    useEffect(() => {
      async function loadData() {
        if(process.browser) { 
        const { data } = await supabase.from('avatars').select('*')
        setAvatars(data as any)
        }
      }
      // Only run query once user is logged in.
      if (process.browser) loadData()
    }, [])
  
    console.log(avatars, 'avatars')

    return (
    <>
     { avatars !== undefined && avatars.length !== 0 && avatars.map((avatar: any, index: number) => {
      return(
        <>
           <Link href={`avatar/${avatar.avatar_id}`} passHref legacyBehavior>
             <AvatarCard avatar={avatar}/>
           </Link>
        </>
      )
     }
      )}
    </>
    )
}