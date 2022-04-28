import Counter from '~/components/atoms/Counter';


function About() {
  return (
		<main class='text-center mx-auto text-gray-700 p-4'>
			<h1 class='max-6-xs text-6xl text-sky-700 font-thin uppercase my-16'>About Page</h1>
			<Counter />
			<p class='my-4'>
				<Link href='/' class='text-sky-600 hover:underline'>
					Home
				</Link>{' - '}
				<span>
					About Page
				</span>
			</p>
		</main>
  );
}

export default About;
