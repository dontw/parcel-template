/**
 * 轉出每三位有一點的數字
 *
 * @param {*} num
 * @returns string
 */
export default function numberFormatter(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
