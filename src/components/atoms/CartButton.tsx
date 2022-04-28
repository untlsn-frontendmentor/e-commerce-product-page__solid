import { JSX, Show } from 'solid-js';
import Cart from '~/assets/images/icon-cart.svg';

interface CartButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  count: number
}

function CartButton(_props: CartButtonProps) {
  const [props, bind] = splitProps(_props, ['count']);

  return (
    <button class="relative" {...bind}>
      <Show when={props.count}>
        <p class="absolute -top-1 -right-1 h-6 w-9 bg-orange rounded-full text-center text-white scale-50 origin-top-right font-bold">
          {props.count}
        </p>
      </Show>
      <Cart class="text-[#69707D]" />
    </button>
  );
}

export default CartButton;
