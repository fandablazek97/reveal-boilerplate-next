module.exports = {
  presets: [
    require("./src/styles/core/tw-reveal-animations"),
    require("./src/styles/core/tw-reveal-utils"),
    require("./src/styles/core/tw-reveal-colors"),
    require("./src/styles/core/tw-reveal-base"), // Musí být jako poslední
  ],

  darkMode: "class", // "class" / "media" / false

  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
};
