import { AvatarCard } from "ui";
import Link from 'next/link'

const AVATAR_URL = "/avatar/1"

export function AvatarList() {
    //TODO replace this onclick function 
    // pass it from above components    
    return (
    <>
        <Link href={AVATAR_URL} passHref legacyBehavior>
          <AvatarCard />
        </Link>
        <Link href={AVATAR_URL} passHref legacyBehavior>
          <AvatarCard />
        </Link>
        <Link href={AVATAR_URL} passHref legacyBehavior>
          <AvatarCard />
        </Link>
        <Link href={AVATAR_URL} passHref legacyBehavior>
          <AvatarCard />
        </Link>
    </>
    )
}