import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import 'twin.macro'
import { ButtonIcon } from './ButtonIcon'
import { IconImg } from './IconImg'
import { Logo } from './Logo'
import { MotionLink } from './MotionLink'
import { WrapperLeftNavBar } from './WrapperLeftNavBar'
import { WrapperRightNavBar } from './WrapperRightNavBar'

const PATH_LOGOUT_ICON = '/logout.svg'
const PATH_MUSIC_ICON = '/music.svg'

export const Navbar: React.FC<{ toggleSidebar: () => void }> = ({
  toggleSidebar
}) => {
  const { pathname } = useRouter()

  return (
    <div tw="flex h-1/6">
      <Logo />
      <WrapperLeftNavBar>
        <MotionLink isActive={pathname === '/'}>
          <NextLink href="/">Home</NextLink>
        </MotionLink>
        <MotionLink isActive={pathname === '/artist'}>
          <NextLink href="/artist">Artist</NextLink>
        </MotionLink>
        <MotionLink isActive={pathname === '/track'}>
          <NextLink href="/track">Track</NextLink>
        </MotionLink>
      </WrapperLeftNavBar>
      <WrapperRightNavBar>
        <ButtonIcon onClick={() => console.log('handleLogout')}>
          <IconImg pathToIcon={PATH_LOGOUT_ICON} />
        </ButtonIcon>
        <ButtonIcon onClick={toggleSidebar}>
          <IconImg pathToIcon={PATH_MUSIC_ICON} />
        </ButtonIcon>
      </WrapperRightNavBar>
    </div>
  )
}
