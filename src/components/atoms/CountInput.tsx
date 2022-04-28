import Minus from '~/assets/images/icon-minus.svg';
import Plus from '~/assets/images/icon-plus.svg';

interface CountInputProps {
  onChange(number: number): void
  value: number,
}

function CountInput(props: CountInputProps) {
  createEffect(() => {
    const prefNum = Math.max(props.value, 1);
    if (prefNum != props.value) {
      props.onChange(prefNum);
    }
  });

  return (
    <div class="bg-[#F7F8FD] flex items-center px-6 py-4 justify-between">
      <button onClick={() => props.onChange(props.value - 1)}>
        <Minus />
      </button>
      <p class="font-bold">
        {props.value}
      </p>
      <button onClick={() => props.onChange(props.value + 1)}>
        <Plus />
      </button>
    </div>
  );
}

export default CountInput;
