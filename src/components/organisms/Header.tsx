import { Signal } from 'solid-js';
import Menu from '~/assets/images/icon-menu.svg';
import Logo from '~/assets/images/logo.svg';
import Cart from '~/assets/images/icon-cart.svg';
import avatar from '~/assets/images/image-avatar.png';
import LeftNav from '~/components/organisms/LeftNav';

export const OpenNav = createContext<Signal<boolean>>();

function Header() {
  const [openNav, setOpenNav] = createSignal(false);

  return (
    <OpenNav.Provider value={[openNav, setOpenNav]}>
      <header class="flex p-6 gap-4 items-center bg-white fixed top-0 left-0 w-full h-16 z-1000">
        <button onClick={() => setOpenNav(true)}>
          <Menu />
        </button>
        <p class="flex-1">
          <a href="/">
            <Logo />
          </a>
        </p>
        <Cart class="text-[#69707D]" />
        <img src={avatar} alt="avatar" class="h-6" />
      </header>
      <hr class="h-16"/>
      <LeftNav />
    </OpenNav.Provider>
  );
}

export default Header;
