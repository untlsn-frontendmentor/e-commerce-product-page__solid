import Minus from '~/assets/images/icon-minus.svg';
import Plus from '~/assets/images/icon-plus.svg';

interface CountInputProps {
  onChange(number: number): void
}

function CountInput(props: CountInputProps) {
  const [number, setNumber] = createSignal(0);
  createEffect(() => {
    const prefNum = Math.max(number(), 0);
    if (prefNum != number()) {
      setNumber(prefNum);
    } else {
      props.onChange(number());
    }
  });

  return (
    <div class="bg-[#F7F8FD] flex items-center px-6 py-4 justify-between">
      <button onClick={() => setNumber((v) => v - 1)}>
        <Minus />
      </button>
      <p class="font-bold">
        {number()}
      </p>
      <button onClick={() => setNumber((v) => v + 1)}>
        <Plus />
      </button>
    </div>
  );
}

export default CountInput;
