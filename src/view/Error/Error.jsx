import { h, render } from 'preact';
import ErrorImage from '../../assets/404.svg';

import picostyle from 'picostyle';

const ps = picostyle(h);

const SubTitle = ps('h1')({
  fontSize: '2.5rem',
  fontWeight: 'bolder',
  color: '#444444'
});

export default function Error() {
  return (
    <div style="height:100vh; display:flex; justify-content: center; align-items: center;">
      <div style="text-align: center;">
        <img src={ErrorImage} alt="404's image" />
        <SubTitle>Oops! Page Not Found!</SubTitle>
        <p class="text-gray-600" style="margin-bottom:10px; ">
          We searched high and low but couldn't find what you're looking for.
        </p>
        <div style="margin-top:0;">
          <span class="mr-1 text-gray-600">Let's find a better place for you to</span>
          <a class="text-blue-600 underline" href="https://www.halfme.com">go</a>
        </div>
      </div>
    </div>
  );
}
