import React from 'react'
import Draggable from 'react-draggable'
import 'twin.macro'
import tw, { css } from 'twin.macro'
import { ProgressBarPointer } from './ProgressBarPointer'
import { ProgressBarSiderContainer } from './ProgressBarSiderContainer'

export const ProgressBar = () => {
  const totalLength = 3000

  const [currentPosition, setCurrentPosition] = React.useState(0)

  const [hover, setHover] = React.useState(false)

  const PointerRef = React.useRef<HTMLDivElement>(null)

  const sliderRef = React.useRef<HTMLDivElement>(null)
  const dragging = React.useRef(false)
  const startPositionMouse = React.useRef<number>(0)
  const startPositionSlider = React.useRef<number>(0)
  const curentTempPosition = React.useRef<number>(0)
  const positionPointer = React.useRef<number>(0)
  const refInterval = React.useRef<NodeJS.Timeout | undefined>()

  const widhtProgress = currentPosition / totalLength
  const componentWidth = sliderRef.current?.getBoundingClientRect().width
    ? sliderRef.current?.getBoundingClientRect().width
    : 0

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
        return position
      })
    }, 1)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging.current && !startPositionMouse.current) {
      startPositionMouse.current = e.pageX
    }
  }

  const handleDragEnd = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // TO PREVENT THAT THE CLICk handler runs.
    // WHEN dragEnd -> ClickHandler runs (no idea why)
    //TO STOP IT RUNNING, IT CHECks IF ITS CURRENTLY DRAGGING
    // IF SO DONT RUN CLIC HANDLER
    // IF I DONT SET TIMEOUT - CLIC HANDLER RUNS
    setTimeout(() => {
      dragging.current = false
    }, 0)

    if (event.pageX < startPositionSlider.current) {
      setCurrentPosition(0)
      return
    }

    if (event.pageX > totalLength) {
      setCurrentPosition(totalLength)
      // dragging.current = false
      return
    }

    if (curentTempPosition.current !== startPositionSlider.current) {
      setCurrentPosition(curentTempPosition.current)
    }

    startIntervall()
  }

  const handleDragging = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.pageX < startPositionSlider.current) {
      positionPointer.current = 0
      return
    }

    // const screenWidth = document.body.clientWidth
    // const componentWidth = screenWidth / 2 - 20

    const diff = event.pageX - startPositionMouse.current

    if (startPositionMouse.current === 0) {
      startPositionMouse.current = event.pageX
      curentTempPosition.current = startPositionSlider.current

      return
    }

    if (event.pageX < startPositionSlider.current) {
      positionPointer.current = startPositionSlider.current
      console.log('positionPointer.current ', positionPointer.current)
      return
    } else if (event.pageX > startPositionSlider.current + componentWidth) {
      positionPointer.current = componentWidth
      return
    } else {
      positionPointer.current = event.pageX - startPositionSlider.current
    }

    const procentualChange = diff / componentWidth
    const changeAbsolute = totalLength * procentualChange
    const newPosition = currentPosition + changeAbsolute

    if (newPosition && newPosition > 0) {
      curentTempPosition.current = newPosition
    } else if (newPosition) {
      curentTempPosition.current = startPositionMouse.current
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging.current) return

    // const screenWidth = document.body.clientWidth
    // const componentWidth = screenWidth / 2 - 20

    console.log(startPositionSlider.current)

    const rectPrevPosition = PointerRef.current?.getBoundingClientRect()

    if (!rectPrevPosition) return

    const previousCenterPosition =
      rectPrevPosition?.left +
      (rectPrevPosition?.right - rectPrevPosition?.left) -
      3

    if (!startPositionSlider.current) {
      startPositionSlider.current = previousCenterPosition
    }

    const diff = event.pageX - previousCenterPosition

    const procentualChange = diff / componentWidth

    const newPosition = currentPosition + totalLength * procentualChange
    if (newPosition) {
      setCurrentPosition(newPosition)
      curentTempPosition.current = newPosition
    }

    positionPointer.current = event.pageX - startPositionSlider.current
    startIntervall()
  }

  const ProgressStyles = css`
    width: ${widhtProgress * 100}%;
  `

  const Progress: React.FC = ({ children }) => (
    <div
      css={[
        tw`relative h-full bg-red-50`,
        ProgressStyles,
        hover && tw`bg-green-400`
      ]}
    >
      {children}
    </div>
  )

  return (
    <button
      ref={sliderRef}
      onClick={handleClick}
      onMouseDown={() => {
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
      {/* <Progress> */}
      <ProgressBarSiderContainer
        progress={currentPosition / totalLength}
        hover={hover}
      >
        <Draggable
          axis="x"
          handle=".handle"
          bounds={{ left: 0, right: componentWidth }}
          position={{ x: positionPointer.current, y: 0 }}
          onStart={(event) => {
            startPositionMouse.current = event.pageX

            if (!startPositionSlider.current && startPositionMouse.current) {
              console.log(
                'startPositionMouse.current',
                startPositionMouse.current
              )
              startPositionSlider.current = startPositionMouse.current
            }
          }}
          onDrag={(event) => {
            dragging.current = true
            handleDragging(event)
          }}
          onStop={handleDragEnd}
        >
          <div>
            <div className="handle">
              <ProgressBarPointer ref={PointerRef} hover={hover} />
            </div>
          </div>
        </Draggable>
      </ProgressBarSiderContainer>
      {/* </Progress> */}
    </button>
  )
}
