import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import 'twin.macro'
import { Logo } from './Logo'
import { Logout } from './Logout'
import { MotionLink } from './MotionLink'
import { WrapperLeftNavBar } from './WrapperLeftNavBar'
import { WrapperRightNavBar } from './WrapperRightNavBar'

export const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <div tw="flex">
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
        <Logout />
      </WrapperRightNavBar>
    </div>
  )
}
