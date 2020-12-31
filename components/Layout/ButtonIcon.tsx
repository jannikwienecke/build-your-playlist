import React from 'react'
import 'twin.macro'

export interface ButtonProps {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}

export const ButtonIcon: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div tw="text-center w-20 hover:border-b-2 border-gray-700  ">
      <button onClick={props.onClick} tw="focus:outline-none">
        {children}
      </button>
    </div>
  )
}
