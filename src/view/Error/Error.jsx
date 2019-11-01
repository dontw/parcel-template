import { h, render } from 'preact';
import ErrorImage from '../../assets/404.svg';
import './style.css'

export default function Error() {
  return (
    <div style="height:100vh; display:flex; justify-content: center; align-items: center;">
      <div style="text-align: center;">
        <img src={ErrorImage} alt="404's image" />
        <h1 class="sub-title">Oops! Page Not Found!</h1>
        <p style="margin-bottom:10px;">
          We searched high and low but couldn't find what you're looking for.
        </p>
        <p style="margin-top:0;">
          Let's find a better place for you to
          <a href="https://www.halfme.com">go</a>
        </p>
      </div>
    </div>
  );
}
