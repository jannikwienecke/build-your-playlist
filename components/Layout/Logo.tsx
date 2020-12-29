import React from 'react'
import 'twin.macro'

export const Logo: React.FC = () => {
  return (
    <div tw="mr-32 ml-10">
      <img src={'/logo.png'} alt="logo" height="120px" width="120px" />
    </div>
  )
}
