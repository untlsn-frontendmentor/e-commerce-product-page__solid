import DiscountPrice from '~/components/molecules/DiscountPrice';
import CountInput from '~/components/atoms/CountInput';
import Cart from '~/assets/images/icon-cart.svg';

interface ArticleProps {
  title: string,
  desc: string,
  price: number,
  discount: number,
}

function Article(props: ArticleProps) {
  const [discountProps] = splitProps(props, ['price', 'discount']);

  return (
    <article class="p-8 text-[#1D2025]">
      <h3 class="uppercase text-orange font-bold">sneaker company</h3>
      <h1 class="capitalize text-3xl font-bold mt-2 mb-4">{props.title}</h1>
      <p class="opacity-50">{props.desc}</p>
      <DiscountPrice {...discountProps} />
      <CountInput onChange={() => {}} />
      <button class="space-x-4 bg-orange text-white p-4 w-full mt-4 rounded-xl">
        <Cart class="inline" />
        <span>Add to cart</span>
      </button>
    </article>
  );
}

export default Article;
