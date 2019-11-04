import { h } from 'preact'
import picostyle from 'picostyle'

const ps = picostyle(h)

const DiscountWrap = ps('div')({
  height: '35px',
  width: '35px',
  top: '6px',
  right: '6px',
  borderRadius: '1px',
  boxShadow: ' 0 3px 6px 0 rgba(0, 0, 0, 0.5)',
  lineHeight: '1.3',
  fontSize: '12px',
  '@media only screen and (min-width: 640px)': {
    height: '45px',
    width: '45px',
    top: '10px',
    right: '10px',
    fontSize: 'initial',
    lineHeight: '1.35'
  }
})

const DiscountTag = ({ discountRate }) => {
  const formatDicsountRate = 100 - discountRate * 100
  if (discountRate) {
    return (
      <DiscountWrap class='absolute pt-1 bg-red-500 text-white text-center'>
        <h3 class='mb-0'>{formatDicsountRate} %</h3>
        <p class='text-white font-bold' style='font-size:12px;'>
          OFF
        </p>
      </DiscountWrap>
    )
  }
}

export default DiscountTag
