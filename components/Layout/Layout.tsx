import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ContainerApp } from './ContainerApp'
import { ContainerContent } from './ContainerContent'
import { ContainerSide } from './ContainerSide'
import { Navbar } from './Navbar'
import { SideNav } from './SideNav'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ContainerApp>
      <ContainerContent>
        <Navbar />
        <div>{children}</div>
      </ContainerContent>

      <ContainerSide>
        <SideNav />
      </ContainerSide>
    </ContainerApp>

    {children}
    <footer></footer>
  </div>
)

export default Layout
