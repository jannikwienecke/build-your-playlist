import React from 'react'
import tw, { css } from 'twin.macro'

export interface ProgressBarPointerProps {
  hover: boolean
}

export type Ref = HTMLDivElement

export const ProgressBarPointer = React.forwardRef<
  Ref,
  ProgressBarPointerProps
>(({ hover }, ref) => {
  const ProgresHoverStyles = css`
    ${tw`text-black`}
    width: 15px;
    height: 15px;
    background-color: lightgrey;
    position: absolute;
    border-radius: 10px;
    top: -5px;
    /* right: -7.5px; */
    position: absolute;
  `

  return <div ref={ref} css={[hover && ProgresHoverStyles]}></div>
})
