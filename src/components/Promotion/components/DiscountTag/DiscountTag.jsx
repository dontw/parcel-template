import { h } from 'preact';
import './style.css'
const DiscountTag = ({ discountRate }) => {
  const formatDicsountRate = 100 - discountRate * 100;
  if (discountRate) {
    return (
      <div
        class="discount-tag absolute pt-1 bg-red-500 text-white text-center"
      >
        <h3 class="mb-0">{formatDicsountRate} %</h3>
        <p class="text-white font-bold" style="font-size:12px;">
          OFF
        </p>
      </div>
    );
  }
};

export default DiscountTag
