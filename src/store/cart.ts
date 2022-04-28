export interface Product {
  name: string,
  price: number,
  count: number,
  image: string
}

export const [cartStore, setCartStore] = createStore({
  products: [] as Product[],
  openBox: false,
});
