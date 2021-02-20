import { green } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  grey: "#636363",
  success: "#6D9B12",
  primary: "#4285F4",
  default: "#E5E5E5",
  error: "#FF0000",
};
export const size = {
  large: {
    width: 270,
    height: 50,
  },
  medium: {
    width: 133,
    height: 50,
  },
  small: {
    width: 120,
    height: 40,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        backgroundColor: colors.success,
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: colors.success,
        },
      },
      containedPrimary: {
        backgroundColor: colors.primary,
        color: colors.white,
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: colors.primary,
        },
      },
      root: {
        textTransform: "capitalize",
        backgroundColor: colors.primary,
        borderRadius: "6px",
        color: colors.grey,
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: colors.default,
        },
      },
      contained: {
        boxShadow: "none",
        marginRight: "30px",
        color: colors.grey,
      },
      sizeLarge: {
        width: size.large.width,
        height: size.large.height,
      },
      sizeSmall: {
        width: size.small.width,
        height: size.small.height,
      },
      iconSizeMedium: {
        width: size.small.width,
        height: size.small.height,
      },
    },
    MuiTextField: {
      root: {
        width: "80%",
      },
    },
    MuiTypography: {
      colorSecondary: {
        color: colors.success,
      },
      colorError: { color: colors.error },
      subtitle2: {
        fontSize: "16px",
        fontWeight: 500,
      },
      caption: {
        fontWeight: 1000,
        fontSize: "14px",
      },
      h1: {
        fontSize: "36px",
        fontWeight: 900,
      },
      h2: {
        fontSize: "32px",
        fontWeight: 700,
      },
      h3: {
        fontSize: "28px",
        fontWeight: 500,
      },
      h4: {
        fontSize: "24px",
        fontWeight: 500,
      },
      h5: {
        fontSize: "18px",
        fontWeight: 500,
      },
      h6: {
        fontSize: "16px",
        fontWeight: 700,
      },
    },
  },
});

export default theme;
