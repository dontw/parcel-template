/**
 * 迷你驗證，在 uat 時不讓不知道咒語的人進去亂玩
 *
 * @export
 * @param {*} cb callback function 驗證通過後執行
 */
export default function miniAuthCheck(cb) {
  const Spell = prompt('請輸入咒語');
  switch (Spell) {
    case 'shibe':
      alert('wow! you are so awesome!');
      cb();
      break;
    default:
      alert('ooops! something wrong, maybe you should google it..');
      location.href = 'https://www.google.com';
      break;
  }
}
