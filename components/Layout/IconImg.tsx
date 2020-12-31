import React from 'react'
import 'twin.macro'
export interface IconImgProps {
  pathToIcon: string
}

export const IconImg: React.FC<IconImgProps> = ({ pathToIcon }) => {
  return (
    <img
      tw="pb-4 focus:outline-none"
      src={pathToIcon}
      alt="logout button"
      height="40px"
      width="40px"
    />
  )
}
