import Cross from '~/assets/images/icon-close.svg';
import { OpenNav } from '~/components/organisms/Header';

function LeftNav() {
  const [openNav, setOpenNav] = useContext(OpenNav);
  const closeNav = () => setOpenNav(false);

  return (
    <>
      <div
        class={`fixed top-0 left-0 h-screen w-screen z-2000 bg-black/70 ${openNav() ? '' : 'invisible'}`}
        onClick={closeNav}
      />
      <nav
        class={`fixed top-0 left-0 bg-white h-screen w-3/5 p-6 transition-transform transform z-2000 ${openNav() ? 'translate-x-0' : '-translate-x-100%'}`}
        onClick={(ev) => ev.stopPropagation()}
      >
        <button onClick={closeNav}>
          <Cross />
        </button>
        <ul class="pt-12 space-y-3 font-bold">
          <li><a href="/">Collections</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default LeftNav;
