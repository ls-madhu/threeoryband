import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/utils/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`,
    `~~/app.config.{js,ts}`,
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#fc8519',
      },
      fontFamily: {
        sans: ['Inter', defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '500px',
      },
    },
  },
} as Config;
