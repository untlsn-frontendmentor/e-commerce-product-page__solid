import { JSX } from 'solid-js';

function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button class="space-x-4 bg-orange text-white p-4 w-full mt-4 rounded-xl font-bold" {...props} />
  );
}

export default Button;
