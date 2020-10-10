const colors1 = {
  /* base color */
  base: {
    default: `#eee`,
    light: `#fff`,
    dark: `#999`,
  },
  /* primary brand color */
  primary: {
    default: `#6610f2`,
    light: `#8540f5`,
    dark: `#510bc4`,
  },
  /* secondary brand color */
  secondary: {
    default: `#dc3545`,
    light: `#e4606d`,
    dark: `#bd2130`,
  },
  font: {
    default: `#333`,
    invert: `#eee`,
  },
};


export default {
  // use this one
  colors: {
    default: colors1
  },
  fontSizes: {
    h1: `36px`,
    h2: `28px`,
    default: `16px`,
    small: `12px`,
  },
  typography: {
    fontFamily: '"Varela Round",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  margin: {
    large: `20px`,
    default: `10px`,
  },
  padding: {
    large: `20px`,
    default: `10px`,
  },
  border: {
    default: `1px solid ${colors1.primary.default}`,
  },
  borderRadius: {
    default: `5px`,
  },
  shadow: {
    default: "0px 4px 40px rgba(25, 25, 25, 0.1)",
  },
};
