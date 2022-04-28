import { Show } from 'solid-js';
import image1 from '~/assets/images/image-product-1.jpg';
import image2 from '~/assets/images/image-product-2.jpg';
import image3 from '~/assets/images/image-product-3.jpg';
import image4 from '~/assets/images/image-product-4.jpg';
import Next from '~/assets/images/icon-next.svg';
import Previous from '~/assets/images/icon-previous.svg';

const images = [image1, image2, image3, image4];

const posTrans = {
  '-1': '-translate-x-100% duration-500',
  0: 'translate-x-0 duration-0',
  1: 'translate-x-100% duration-500',
};

function ImageScroller() {
  const [curImage, setCurImage] = createSignal(0);
  const [curImageAnim, setCurImageAnim] = createSignal(0);
  const imagePos = createMemo(() => {
    if (curImage() == curImageAnim()) return 0;
    if (curImage() < curImageAnim()) return -1;
    if (curImage() > curImageAnim()) return 1;
  });

  createEffect(() => {
    if (imagePos() != 0) {
      setTimeout(() => {
        setCurImage(curImageAnim());
      }, 500);
    }
  });

  return (
    <div class="relative flex items-center">
      <div class={`relative ${posTrans[imagePos()]}`}>
        <Show when={imagePos() == 1}>
          <img
            class="absolute transform -translate-x-100% top-0 left-0"
            src={images[curImageAnim()]}
            alt="product"
          />
        </Show>
        <img
          src={images[curImage()]}
          alt="product"
        />
        <Show when={imagePos() == -1}>
          <img
            class="absolute transform translate-x-100% top-0 right-0"
            src={images[curImageAnim()]}
            alt="product"
          />
        </Show>
      </div>

      <button
        onClick={() => setCurImageAnim((v) => {
          if (imagePos() != 0) return v;
          return Math.max(0, v - 1);
        })}
        class="absolute left-5 rounded-full p-4 bg-white h-12 w-12"
      >
        <Previous />
      </button>
      <button
        onClick={() => setCurImageAnim((v) => {
          if (imagePos() != 0) return v;
          return Math.min(v + 1, images.length - 1);
        })}
        class="absolute right-5 rounded-full p-4 bg-white h-12 w-12"
      >
        <Next />
      </button>
    </div>
  );
}

export default ImageScroller;
