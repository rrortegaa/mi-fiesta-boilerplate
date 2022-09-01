module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            '404': "url('https://cdn.pixabay.com/photo/2017/08/07/07/18/cakes-2600951_960_720.jpg')",
            'home': "url('https://cdn.pixabay.com/photo/2022/08/21/22/01/bokeh-7402197_960_720.jpg')"
        },
        spacing: {
            '60px': '60px'
        }
      },
    },
    plugins: [],
  }