import React from 'react'
import { Recommendation } from './Recommendation'
import { WrapperRecommendation } from './WrapperRecommendation'

export const SideNavRecommendation = () => {
  return (
    <WrapperRecommendation>
      <Recommendation
        headline="Recommendation Top Artist"
        items={[1, 2, 3, 4, 5]}
      />
      <Recommendation
        headline="Recommendation Top Tracks"
        items={[1, 2, 3, 4, 5]}
      />
    </WrapperRecommendation>
  )
}
