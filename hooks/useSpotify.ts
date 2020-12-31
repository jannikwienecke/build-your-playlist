import React from 'react'

export const useSpotify = () => {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token =
        'BQDKEHEnjtU7HOJofRAeyrGI8FEALDICr65Ur3JFC79S4HTJwTlKdTrzxEPoBEODMTBcv4zi9os35idPEd4jrQRjPfiem_u4NgWvCYnBf3YOH4H94fHfF23wo-M7Xt37ayfEq-2qxWFro_gjlQmVYh2j6vTeE1QXMAHcgeW0kHLPxPtFeuTbpCiqr9gL4EmJq13BduWII5vBVtCy0_mhKsBUhDhXsuN6And2Z9l7ywEpu7PMfjdMw5aevtQ8TBcWaACWQHUa72strw'
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb) => {
          cb(token)
        }
      })

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('authentication_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('account_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('playback_error', ({ message }) => {
        console.error(message)
      })

      // Playback status updates
      player.addListener('player_state_changed', (state) => {
        console.log(state)
      })

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
      })

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      // Connect to the player!
      player.connect()
    }
  }, [])
}
