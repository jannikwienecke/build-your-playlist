import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ContainerApp } from './ContainerApp'
import { ContainerContent } from './ContainerContent'
import ContainerSide from './ContainerSide'
import { ContentWrapper } from './ContentWrapper'
import { Navbar } from './Navbar'
import NavPlayer from './NavPlayer/NavPlayer'
import { SideNav } from './SideNav'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [showSidebar, setshowSidebar] = React.useState(false)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </Head>

      <ContainerApp>
        <ContainerContent>
          <Navbar toggleSidebar={() => setshowSidebar(!showSidebar)} />
          <ContentWrapper>{children}</ContentWrapper>
          <NavPlayer />
        </ContainerContent>

        <ContainerSide showSidebar={showSidebar}>
          <SideNav />
        </ContainerSide>
      </ContainerApp>

      <footer></footer>
    </div>
  )
}

export default Layout
