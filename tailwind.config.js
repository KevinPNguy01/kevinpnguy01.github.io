/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        wiggle: {
          "40%, 60%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, .1)",
          },
        },
      },
    },
  },
  plugins: [],
};
