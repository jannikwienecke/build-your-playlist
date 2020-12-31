import dynamic from 'next/dynamic'
import React from 'react'
import Draggable from 'react-draggable'
import 'twin.macro'
import tw, { css } from 'twin.macro'
import { ControlButtonPrimary } from './ControlButtonPrimary'
import { ControlButtonSecondary } from './ControlButtonSecondary'
import { ControlWrapperInner } from './ControlWrapperInner'
import { ControlWrapperOuter } from './ControlWrapperOuter'
import { WrapperControl } from './WrapperControl'
import { WrapperMainPlayer } from './WrapperMainPlayer'

const NavPlayer = () => {
  const totalLength = 3000

  const [currentPosition, setCurrentPosition] = React.useState(0)

  const [hover, setHover] = React.useState(false)

  // console.log('currentPosition', currentPosition)
  const widhtProgress = currentPosition / totalLength

  const refInterval = React.useRef<NodeJS.Timeout | undefined>()
  React.useEffect(() => {
    startIntervall()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (Math.round(currentPosition) === totalLength) {
      if (refInterval && refInterval.current) {
        clearInterval(refInterval.current)
        setCurrentPosition((position: number) => {
          return position + 0.1
        })
      }
    }
  }, [currentPosition])

  const startIntervall = () => {
    refInterval.current = setInterval(() => {
      setCurrentPosition((position: number) => {
        return position + 0.1
      })
    }, 1)
  }

  const dragging = React.useRef(false)
  const startPositionMouse = React.useRef<number>(0)
  const curentTempPosition = React.useRef<number>(0)
  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging.current && !startPositionMouse.current) {
      startPositionMouse.current = e.pageX
    }
  }

  const handleDragEnd = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleDragging(event)
    console.log('position', curentTempPosition.current)
    setCurrentPosition(curentTempPosition.current)
    startPositionMouse.current = 0
    startIntervall()
  }

  const handleDragging = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log('DRAGGGING')
    const screenWidth = document.body.clientWidth
    const componentWidth = screenWidth / 2 - 20
    const diff = event.pageX - startPositionMouse.current

    console.log(`${diff} / ${componentWidth}`, diff / componentWidth)

    const procentualChange = diff / componentWidth
    const newPosition = currentPosition + totalLength * procentualChange
    if (newPosition) {
      curentTempPosition.current = newPosition
    }

    console.log('oldPosition', currentPosition)
    console.log('newPosition', newPosition)
    // console.log('newPosition', newPosition)
    // console.log('newPosition', newPosition)
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const screenWidth = document.body.clientWidth
    const componentWidth = screenWidth / 2 - 20

    const rectPrevPosition = ref.current?.getBoundingClientRect()

    if (!rectPrevPosition) return

    const previousCenterPosition =
      rectPrevPosition?.left +
      (rectPrevPosition?.right - rectPrevPosition?.left) -
      3

    console.log('previousCenterPosition')
    console.log('ClickPosition  ', event.pageX)

    const diff = event.pageX - previousCenterPosition
    console.log('diff', diff)

    const procentualChange = diff / componentWidth
    const newPosition = currentPosition + totalLength * procentualChange
    if (newPosition) {
      setCurrentPosition(newPosition)
      curentTempPosition.current = newPosition
    }
    startPositionMouse.current = 0
    startIntervall()
  }

  const ProgressStyles = css`
    width: ${widhtProgress * 100}%;
  `

  const ProgresHoverStyles = css`
    ${tw`text-black`}
    width: 15px;
    height: 15px;
    background-color: lightgrey;
    position: absolute;
    border-radius: 10px;
    top: -5px;
    right: -7.5px;
    position: absolute;
  `

  const Pointer = () => {
    return <div ref={ref} css={[hover && ProgresHoverStyles]}></div>
  }

  const Progress: React.FC = ({ children }) => (
    <div
      css={[
        tw`h-full relative bg-red-50`,
        ProgressStyles,
        // hover && ProgresHoverStyles,
        hover && tw`bg-green-400`
      ]}
    >
      {children}
    </div>
  )

  return (
    <div
      // ref={ref}
      tw="bg-gray-800 w-full h-28 flex justify-items-center justify-center "
    >
      <div tw=" w-1/4  flex justify-items-center justify-center">
        Track Info
      </div>
      <WrapperMainPlayer>
        <WrapperControl>
          <ControlWrapperOuter>
            <ControlWrapperInner>
              <ControlButtonSecondary>
                <img src="./next.png" alt="play" height="20px" width="20px" />
              </ControlButtonSecondary>
            </ControlWrapperInner>
          </ControlWrapperOuter>
          <ControlWrapperOuter>
            <ControlWrapperInner>
              <ControlButtonSecondary>
                <img src="./next.png" alt="play" height="20px" width="20px" />
              </ControlButtonSecondary>
            </ControlWrapperInner>
          </ControlWrapperOuter>
          <ControlWrapperOuter>
            <ControlWrapperInner>
              <ControlButtonPrimary>
                <img src="./play.png" alt="play" height="20px" width="20px" />
              </ControlButtonPrimary>
            </ControlWrapperInner>
          </ControlWrapperOuter>
          <ControlWrapperOuter>
            <ControlWrapperInner>
              <ControlButtonSecondary>
                <img src="./next.png" alt="play" height="20px" width="20px" />
              </ControlButtonSecondary>
            </ControlWrapperInner>
          </ControlWrapperOuter>
          <ControlWrapperOuter>
            <ControlWrapperInner>
              <ControlButtonSecondary>
                <img src="./next.png" alt="play" height="20px" width="20px" />
              </ControlButtonSecondary>
            </ControlWrapperInner>
          </ControlWrapperOuter>
        </WrapperControl>

        <div tw="flex  h-2/6 flex-col justify-center">
          <button
            onClick={handleClick}
            onMouseDown={() => {
              console.log('click...')

              if (refInterval && refInterval.current) {
                clearInterval(refInterval.current)
              }
            }}
            tw="bg-gray-600 h-1 relative focus:outline-none"
            onMouseOver={() => setHover(true)}
            onFocus={() => {}}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              if (!dragging.current) setHover(false)
            }}
          >
            <Progress>
              <Draggable
                axis="x"
                handle=".handle"
                onDrag={(event) => {
                  dragging.current = true
                  console.log('drag....')
                  handleDragging(event)
                }}
                onStop={handleDragEnd}
              >
                <div>
                  <div className="handle">
                    <Pointer />
                  </div>
                </div>
              </Draggable>
            </Progress>
          </button>
        </div>
      </WrapperMainPlayer>
      <div tw=" w-1/4 flex justify-items-center justify-center">Settings</div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(NavPlayer), {
  ssr: false
})
