import { h } from 'preact'

import getColorContrast from '~/utils/getColorContrast'

import PromotionCard from './PromotionCard.jsx'

import CommingSoonImage from '~/assets/comingsoon.svg'

const blackCommingSoonImage = (
  <img
    class='inline-block'
    style={{ width: '300px', height: '300px', filter: 'invert(100%)' }}
    src={ CommingSoonImage }
    alt='comming soon image'
  />
)

const whiteCommingSoonImage = (
  <img
    class='inline-block'
    style={{ width: '300px', height: '300px' }}
    src={ CommingSoonImage }
    alt='comming soon image'
  />
)

export default function Promotion({ data }) {
  return (
    <div id={data.promotionId}>
      <h1
        class='text-xl md:text-4xl py-2 md:py-6 text-center'
        style={{ backgroundColor: data.headerBgColor }}
      >
        {data.promotionHeader}
      </h1>
      <div style={{ backgroundColor: data.contentBgColor }}>
        <div class='container m-auto flex flex-wrap py-5 px-2 xl:px-32'>
          {data.promotionItems && data.promotionItems.length > 0 ? (
            data.promotionItems.map(item => (
              <div class='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 xxl:w-1/4'>
                <PromotionCard data={item} />
              </div>
            ))
          ) : (
            //TODO: color change function
            <div class='w-full text-center'>
              {
                getColorContrast(data.contentBgColor) === 'black' ? whiteCommingSoonImage : blackCommingSoonImage
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
