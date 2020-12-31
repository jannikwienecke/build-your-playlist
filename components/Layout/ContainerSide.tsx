import { motion } from 'framer-motion'
import React from 'react'
import 'twin.macro'
const ContainerSide: React.FC<{ showSidebar: boolean }> = ({
  children,
  showSidebar
}) => {
  const styleShowSidebar = { width: '25%' }
  const styleHideSideBar = { width: '0' }

  return (
    <motion.nav
      initial={showSidebar ? styleShowSidebar : styleHideSideBar}
      style={{ position: 'relative' }}
      animate={showSidebar ? styleShowSidebar : styleHideSideBar}
      transition={{ duration: 0.2 }}
    >
      {showSidebar && <>{children}</>}
    </motion.nav>
  )
}

export default ContainerSide
