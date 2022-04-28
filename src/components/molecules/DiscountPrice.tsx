interface DiscountPriceProps {
  price: number,
  discount: number,
}

function DiscountPrice(props: DiscountPriceProps) {
  const realDiscount = createMemo(() => {
    const per = props.discount / 100;

    const minusPrice = props.price * per;
    return props.price - minusPrice;
  });

  return (
    <section class="flex items-center gap-4 pt-6 font-bold">
      <h2 class="text-2xl">
        ${realDiscount().toFixed(2)}
      </h2>
      <p class="text-orange bg-[#FFEDE0] px-2 rounded">{props.discount}%</p>
      <p class="opacity-30 flex-1 text-right"><s>${props.price.toFixed(2)}</s></p>
    </section>
  );
}

export default DiscountPrice;
