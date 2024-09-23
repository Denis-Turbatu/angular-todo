/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".todo-input": {
          backgroundColor: theme("colors.slate.200"),
          padding: theme("spacing.2"),
          borderRadius: theme("borderRadius.full"),
          width: theme("w.80"),
        },
        ".todo-button": {
          backgroundColor: theme("colors.red.500"),
          paddingInline: theme('spacing.4'),
          paddingBlock: theme('spacing.2'),
          borderRadius: theme("borderRadius.full"),
        },
      });
    },
  ],
};
