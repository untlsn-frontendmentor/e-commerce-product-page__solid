import { Show } from 'solid-js';
import Button from '~/components/atoms/Button';
import { cartStore, Product, setCartStore } from '~/store/cart';
import Trash from '~/assets/images/icon-delete.svg';

function CartBox() {
  let article: HTMLElement;

  createEffect(() => {
    if (cartStore.openBox && article) article.focus();
  });

  return (
    <Show when={cartStore.openBox}>
      <article
        ref={(ref) => {
          article = ref;
        }}
        tabIndex={-1}
        class="fixed top-18 left-0 bg-white z-1000 w-24/25 ml-1/50 rounded-xl"
        onBlur={() => setCartStore('openBox', false)}
      >
        <h1 class="py-5 pl-8 font-bold">Cart</h1>
        <hr class="border-gray-200"/>
        <Show
          when={cartStore.products.length}
          fallback={(
            <p class="font-bold opacity-50 text-center py-24">Your cart is empty.</p>
          )}
        >
          <ul class="p-8 pb-0 space-y-6">
            <For each={cartStore.products}>{(product, i) => (
              <li class="flex justify-between items-center gap-4">
                <img class="h-14 rounded-lg" src={product.image} alt="product"/>
                <div class="text-black/50 flex-1">
                  <h1>{product.name}</h1>
                  <p>
                    <span>${product.price} x {product.count} </span>
                    <b class="text-black">
                      ${product.price * product.count}
                    </b>
                  </p>
                </div>
                <button onClick={() => {
                  setCartStore('products', produce((products: Product[]) => {
                    products.splice(i(), 1);
                  }));
                }}>
                  <Trash/>
                </button>
              </li>
            )}</For>
          </ul>
          <div class="p-6">
            <Button>
              Checkout
            </Button>
          </div>
        </Show>

      </article>
    </Show>
  );
}

export default CartBox;
