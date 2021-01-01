import dynamic from 'next/dynamic'
import React from 'react'
import 'twin.macro'
import { ProgressBar } from '../../MusicPlayer/ProgressBar'
import { ControlButtonPrimary } from './ControlButtonPrimary'
import { ControlButtonSecondary } from './ControlButtonSecondary'
import { ControlWrapperInner } from './ControlWrapperInner'
import { ControlWrapperOuter } from './ControlWrapperOuter'
import { WrapperControl } from './WrapperControl'
import { WrapperMainPlayer } from './WrapperMainPlayer'
import { WrapperPlaterSettings } from './WrapperPlaterSettings'
import { WrapperPlayerMain } from './WrapperPlayerMain'
import { WrapperProgressBar } from './WrapperProgressBar'
import { WrapperTrackInfo } from './WrapperTrackInfo'

const NavPlayer = () => {
  return (
    <WrapperPlayerMain>
      <WrapperTrackInfo>Track Info</WrapperTrackInfo>

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

        <WrapperProgressBar>
          <ProgressBar />
        </WrapperProgressBar>
      </WrapperMainPlayer>

      <WrapperPlaterSettings>Settings</WrapperPlaterSettings>
    </WrapperPlayerMain>
  )
}

export default dynamic(() => Promise.resolve(NavPlayer), {
  ssr: false
})
