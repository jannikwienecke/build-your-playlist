import { motion } from 'framer-motion'
import React from 'react'
import tw, { css } from 'twin.macro'

export const MotionLink: React.FC<{ isActive: boolean }> = ({
  children,
  isActive
}) => {
  const stylesActive = css`
    ${tw`text-xl pb-5 mr-10  w-24 text-center font-bold font-mono text-gray-400 cursor-pointer`}
    ${tw`border-b-2 border-black text-black`}
  `
  const stylesInActive = css`
    ${tw`text-xl pb-5 mr-10  w-24 text-center font-bold font-mono text-gray-400 cursor-pointer`}
  `

  return (
    <motion.div
      initial={{
        scale: 0.95
      }}
      transition={{ duration: 1 }}
      css={[isActive ? stylesActive : stylesInActive]}
      animate={{
        scale: !isActive ? 0.95 : 1,
        opacity: isActive ? 1 : 0.6
      }}
    >
      {children}
    </motion.div>
  )
}
