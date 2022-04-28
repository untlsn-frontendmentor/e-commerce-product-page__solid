import { UserConfig } from 'vite';
import solid from 'solid-start';
import { join } from 'path';
import css from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import solidSvg from 'vite-plugin-solid-svg';

export default {
	plugins: [
		solid({
			adapter: 'solid-start-static',
		}),
		css(),
		AutoImport({
			include: [/\.[tj]sx?$/],
			imports: [
				'solid-js',
				'solid-app-router',
			],
		}),
		solidSvg(),
	],
	resolve: {
		alias: {
			'~': join(__dirname, 'src'),
			$css: join(__dirname, 'src/assets/style/bundle.ts'),
		}
	}
} as UserConfig;
