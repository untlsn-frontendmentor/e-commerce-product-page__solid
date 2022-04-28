import Header from '~/components/organisms/Header';
import ImageScroller from '~/components/organisms/ImageScroller';
import DiscountPrice from '~/components/molecules/DiscountPrice';
import CountInput from '~/components/atoms/CountInput';
import Cart from '~/assets/images/icon-cart.svg';

function Index() {
  return (
    <main>
      <Header />
      <ImageScroller />
      <article class="p-8 text-[#1D2025]">
        <h3 class="uppercase text-orange font-bold">sneaker company</h3>
        <h1 class="capitalize text-3xl font-bold mt-2 mb-4">fall limited edition sneakers</h1>
        <p class="opacity-50">
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <DiscountPrice price={250} discount={50} />
        <CountInput onChange={() => {}} />
        <button class="space-x-4 bg-orange text-white p-4 w-full mt-4 rounded-xl">
          <Cart class="inline" />
          <span>Add to cart</span>
        </button>
      </article>
    </main>
  );
}

export default Index;
