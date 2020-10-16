
export default (theme) => ({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "content-box",
    },
    'body': {
      margin: 0,
    },
    'a': {
      textDecoration: 'none'
    },
  },

  App: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.fontSizes.default
  }
})