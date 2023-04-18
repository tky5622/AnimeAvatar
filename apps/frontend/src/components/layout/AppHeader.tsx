'use client'
import {
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
} from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { useDisclosure } from '@mantine/hooks'
// import { useAccount } from 'wagmi'
import Link from 'next/link'
// import { WalletConnectContainer } from '../walletConnect/WalletConnectContainer'
// import { UserMenu } from './UserMenu'

const HEADER_HEIGHT = 60

// type AppHeaderProps = {
//   // children: React.ReactNode
// }

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}))

const links = [
  // {
  //   link: '',
  //   label: 'explore',
  //   links: [{ link: '3d models;', label: '3d models' }],
  // },
  {
    link: '/artists',
    label: 'artists',
  },
  {
    link: '/projects',
    label: 'projects',
  },
]

type LinksType = {
  link: string
  label: string
  links?: LinksType[]
}

export function AppHeader() {
  const { classes } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
//   const { isConnected, address } = useAccount()

  const items = links.map((link: LinksType) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={link.link}>
        <Menu.Item>{item.label}</Menu.Item>
      </Link>
    ))

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover">
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              // onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                {/* <IconChevronDown size={12} stroke={1.5} /> */}
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Link
        href={link.link}
        key={link.label}
        className={classes.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    )
  })

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Link href={'/home'}>
            <MantineLogo size={28} />
          </Link>
        </Group>
        <Group spacing={5} className={classes.links}>
          \{items}
        </Group>

        {/* {isConnected ? (
          <UserMenu address={address} />
        ) : (
          <WalletConnectContainer />
        )} */}
      </Container>
    </Header>
  )
}

export default AppHeader
