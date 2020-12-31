import React from 'react'
import dynamic from 'next/dynamic'
import { useSpotify } from '../../hooks/useSpotify'
import 'twin.macro'
export const Player = () => {
  useSpotify()

  return <div tw=" h-full">hello</div>
}
export default dynamic(() => Promise.resolve(Player), {
  ssr: false
})
