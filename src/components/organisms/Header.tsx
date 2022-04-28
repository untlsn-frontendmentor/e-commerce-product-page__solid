import { Signal } from 'solid-js';
import Menu from '~/assets/images/icon-menu.svg';
import Logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/image-avatar.png';
import LeftNav from '~/components/organisms/LeftNav';
import CartButton from '~/components/atoms/CartButton';
import { cartStore, setCartStore } from '~/store/cart';
import CartBox from '~/components/organisms/CartBox';

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
        <CartButton
          count={cartStore.products.length}
          onClick={() => setCartStore('openBox', (v) => !v)}
        />
        <img src={avatar} alt="avatar" class="h-6" />
      </header>
      <hr class="h-16"/>
      <LeftNav />
      <CartBox />
    </OpenNav.Provider>
  );
}

export default Header;
