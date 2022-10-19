import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin(),
	],
	define: {
		__BUILD_TIMESTAMP__: JSON.stringify(new Date()),
		__COMMIT_REF__: JSON.stringify(process.env.COMMIT_REF),
		__REPOSITORY_URL__: JSON.stringify(process.env.REPOSITORY_URL),
	},
});
