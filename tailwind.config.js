export default {
  content: [
    "./index.html",
    "./src/**/*.{js,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(92.2% 0.005 325.62)",
        surface: {
          1: "#111118",
          2: "#171720",
        },
        text: {
          primary: "#EDEDED",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        accent: "#C9A227",
      },
      borderColor: {
        soft: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
}