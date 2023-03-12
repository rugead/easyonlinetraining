module.exports = {
  content: [
    "./src/**/*.{js,html}",
    './public/*.html',
    '*.{html,js}'
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  theme: {},
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
