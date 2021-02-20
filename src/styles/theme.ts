import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  success: "#6D9B12",
  primary: "#4285F4",
  default: "#E5E5E5",
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

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      root: {
        paddingRight: defaultTheme.spacing(10),
      },
      icon: {
        color: colors.black,
      },
    },
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
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: colors.primary,
        },
      },
      root: {
        textTransform: "capitalize",
        backgroundColor: colors.primary,
        borderRadius: "6px",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: colors.default,
        },
      },
      contained: {
        boxShadow: "none",
        marginRight: "15px",
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
  },
});

export default theme;
