// import { defineConfig } from 'astro/config';
// // import sitemap from '@astrojs/sitemap';
// // import tailwind from '@astrojs/tailwind';

// const SERVER_PORT = 3000;
// const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// const LIVE_URL = 'https://pradeepvegi.github.io';
// const SCRIPT = process.env.npm_lifecycle_script || "";
// const isBuild = SCRIPT.includes('astro build');
// let BASE_URL = LOCALHOST_URL

// if (isBuild) {
//     BASE_URL = LIVE_URL
// }

// export default defineConfig({
//     server: { port: SERVER_PORT },
//     // site: BASE_URL,
//     // integrations: [tailwind(), sitemap()],
//     site: 'https://PradeepVegi.github.io',
// });

import { defineConfig } from 'astro/config'

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const GITHUB_URL = 'https://PradeepVegi.github.io';

// Check if we're in production build
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    server: { port: SERVER_PORT },
    site: isProduction ? GITHUB_URL : LOCALHOST_URL,
    base: isProduction ? '/https://PradeepVegi.github.io' : '/',
})