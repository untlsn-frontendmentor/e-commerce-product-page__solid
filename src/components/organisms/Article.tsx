import DiscountPrice from '~/components/molecules/DiscountPrice';
import CountInput from '~/components/atoms/CountInput';
import Cart from '~/assets/images/icon-cart.svg';
import Button from '~/components/atoms/Button';
import { cartStore, setCartStore } from '~/store/cart';
import image from '~/assets/images/image-product-1-thumbnail.jpg';

interface ArticleProps {
  title: string,
  desc: string,
  price: number,
  discount: number,
}

function Article(props: ArticleProps) {
  const [discountProps] = splitProps(props, ['price', 'discount']);
  const [count, setCount] = createSignal(1);

  return (
    <article class="p-8 text-[#1D2025]">
      <h3 class="uppercase text-orange font-bold">sneaker company</h3>
      <h1 class="capitalize text-3xl font-bold mt-2 mb-4">{props.title}</h1>
      <p class="opacity-50">{props.desc}</p>
      <DiscountPrice {...discountProps} />
      <CountInput
        value={count()}
        onChange={setCount}
      />
      <Button onClick={() => {
        setCartStore('products', cartStore.products.length, {
          name: 'Autumn Limited Edition',
          price: 125,
          count: count(),
          image,
        });
      }}>
        <Cart class="inline" />
        <span>Add to cart</span>
      </Button>
    </article>
  );
}

export default Article;
