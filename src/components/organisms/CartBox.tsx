import { Show } from 'solid-js';
import Button from '~/components/atoms/Button';
import { cartStore } from '~/store/cart';
import Trash from '~/assets/images/icon-delete.svg';

function CartBox() {
  return (
    <Show when={cartStore.openBox}>
      <article class="fixed top-18 left-0 bg-white z-1000 w-24/25 ml-1/50 rounded-xl">
        <h1 class="py-5 pl-8 font-bold">Cart</h1>
        <hr class="border-gray-200"/>
        <ul class="p-8 pb-0 space-y-6">
          <For each={cartStore.products}>{(product) => (
            <li class="flex justify-between">
              <img class="h-16 rounded-lg" src={product.image} alt="product"/>
              <div class="text-black/50">
                <h1>{product.name}</h1>
                <p>
                  <span>${product.price} x {product.count} </span>
                  <b>
                    ${product.price * product.count}
                  </b>
                </p>
              </div>
              <button>
                <Trash />
              </button>
            </li>
          )}</For>
        </ul>
        <div class="p-6">
          <Button>
            Checkout
          </Button>
        </div>
      </article>
    </Show>
  );
}

export default CartBox;
