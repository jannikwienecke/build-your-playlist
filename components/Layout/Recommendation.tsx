import React from 'react'
import { ButtonWrapperRecommendation } from './ButtonWrapperRecommendation'
import { HeaderRecommendation } from './HeaderRecommendation'
import { HeadlineTextRecommendation } from './HeadlineTextRecommendation'
import { NextRecommendationBtn } from './NextRecommendationBtn'
import { WrapperRecommendationRow } from './WrapperRecommendationRow'
import { WrapperRecommendationSingleItem } from './WrapperRecommendationSingleItem'
import { TextRecommendationSingleItem } from './TextRecommendationSingleItem'
import { ImageRecommendation } from './ImageRecommendation'

export interface PropsRecommendation {
  headline: string
  items: number[]
}

export const Recommendation: React.FC<PropsRecommendation> = ({
  items,
  headline
}) => (
  <>
    <HeaderRecommendation>
      <HeadlineTextRecommendation>{headline}</HeadlineTextRecommendation>
      <NextRecommendationBtn>
        <img src="./arrowNext.png" alt="arow" />
      </NextRecommendationBtn>
    </HeaderRecommendation>

    <WrapperRecommendationRow>
      {items.slice(0, 3).map((x) => {
        const itemSubText = 'Ed Sheeran'

        return (
          <WrapperRecommendationSingleItem>
            <ButtonWrapperRecommendation>
              <ImageRecommendation
                src="https://i.scdn.co/image/c9e693f336bc004af00c51bbf0a157e8b5af75f2"
                alt="artist"
              />
            </ButtonWrapperRecommendation>
            <TextRecommendationSingleItem>
              {itemSubText.length < 35
                ? itemSubText
                : itemSubText.slice(0, 32) + '...'}
            </TextRecommendationSingleItem>
          </WrapperRecommendationSingleItem>
        )
      })}
    </WrapperRecommendationRow>
  </>
)
