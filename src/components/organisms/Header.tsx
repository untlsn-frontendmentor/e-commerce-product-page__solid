import Menu from '~/assets/images/icon-menu.svg';
import Logo from '~/assets/images/logo.svg';
import Cart from '~/assets/images/icon-cart.svg';
import avatar from '~/assets/images/image-avatar.png';

function Header() {
  return (
    <>
      <header class="flex p-6 gap-4 items-center bg-white fixed top-0 left-0 w-full h-16">
        <Menu />
        <Logo class="flex-1" />
        <Cart />
        <img src={avatar} alt="avatar" class="h-6" />
      </header>
      <hr class="h-16"/>
    </>
  );
}

export default Header;
