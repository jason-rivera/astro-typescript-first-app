import { useStore } from '@nanostores/preact';
import { isUserLoggedIn } from '../stores/userStore';

const Header2 = () => {
  const $isUserLoggedIn = useStore(isUserLoggedIn);

  return (
    <nav>
      <div class='links'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/blog'>Blog</a>
      </div>
      <div class='links'>
        {$isUserLoggedIn ? (
          <a href='/logout'>Logout</a>
        ) : (
          <>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header2;
