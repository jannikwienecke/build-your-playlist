import React from 'react'
import 'twin.macro'
import { SideNavProfile } from './SideNavProfile'
import { SideNavRecommendation } from './SideNavRecommendation'
import Player from './Player'

export const SideNav: React.FC = () => {
  return (
    <div tw="flex h-full flex-col">
      <div tw=" h-1/4">
        <SideNavProfile />
      </div>
      <div tw="h-2/4">
        <SideNavRecommendation />
      </div>
      <div tw=" h-1/4">
        <Player />
      </div>
    </div>
  )
}
