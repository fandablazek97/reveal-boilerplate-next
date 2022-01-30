// Funkce pro podporu všech barevných utilit z proměnných v CSS
// viz: `https://tailwindcss.com/docs/customizing-colors`
// a viz: `https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo`
function withOpacityValue(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(${variable}), var(${opacityVariable}, 1)`;
    }
    return `hsl(var(${variable}))`;
  };
}

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        gray: {
          50: withOpacityValue("--color-gray-50"),
          100: withOpacityValue("--color-gray-100"),
          200: withOpacityValue("--color-gray-200"),
          300: withOpacityValue("--color-gray-300"),
          400: withOpacityValue("--color-gray-400"),
          500: withOpacityValue("--color-gray-500"),
          600: withOpacityValue("--color-gray-600"),
          700: withOpacityValue("--color-gray-700"),
          800: withOpacityValue("--color-gray-800"),
          900: withOpacityValue("--color-gray-900"),
          950: withOpacityValue("--color-gray-950"),
        },

        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),

        muted: withOpacityValue("--color-muted"),
        default: withOpacityValue("--color-default"),
        rich: withOpacityValue("--color-rich"),

        body: withOpacityValue("--color-body"),
        "body-100": withOpacityValue("--color-body-100"),
        "body-200": withOpacityValue("--color-body-200"),
        "body-300": withOpacityValue("--color-body-300"),

        success: colors.emerald,
        error: colors.red,
        warning: colors.amber,
        info: colors.blue,
      },
    },
  },
};
