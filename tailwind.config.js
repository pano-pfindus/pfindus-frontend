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
    `~/app.config.{js,ts}`,
  ],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      ms: "450px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      osm: [{ min: "320px", max: "449px" }],
    },
    colors: {
      primaryDark: "#521D3A",
      primaryLight: "#632949",
      title: "#8C3C4F",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Source Sans Pro"],
    },
  },
  plugins: [],
};
