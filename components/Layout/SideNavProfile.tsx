import React from 'react'
import 'twin.macro'
export const SideNavProfile = () => {
  const userName = 'Jannik Wienecke'
  const pathUserImage = './profile.png'
  return (
    <div tw="flex justify-center flex-col h-full items-center ">
      <img
        tw="align-middle w-28 h-28 rounded-2xl bg-gray-100 shadow-customProfileShadow "
        src={pathUserImage ? pathUserImage : './profile.png'}
        alt="spotify profile"
      />
      <p tw="text-lg mt-2 text-white font-semibold font-mono">{userName}</p>
    </div>
  )
}
