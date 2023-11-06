import { createTheme } from "@mui/material";

const palette = {
  primary: {
    0.5: "#F4EFFD",
    1: "#E9DFFC",
    2: "#D3BFF9",
    3: "#BE9FF6",
    4: "#A87FF3",
    5: "#925FF0",
    6: "#784DC7",
    7: "#5E3A9E",
    8: "#432876",
    8.5: "#361F61",
    9: "#29154D",
    9.5: "#1C0C38",
    10: "#0F0324",
  },
  grey: {
    "-1": "#E6E6E6",
    0: "#9F9F9F",
    0.5: "#909090",
    1: "#818181",
    1.5: "#737373",
    2: "#646464",
    3: "#464646",
    4: "#292929",
    5: "#0B0B0B",
    6: "#090909",
    7: "#070707",
    8: "#040404",
    8.5: "#030303",
    9: "#020202",
    9.5: "#010101",
    10: "#000000",
  },
  white: "#FFFFFF",
};

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: "30px",
          padding: "0px 16px",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: palette.primary[6],
            fontSize: "14px",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:active": {
              color: palette.primary[8.5],
            },
            "&.Mui-disabled": {
              color: palette.grey[1.5],
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: palette.primary[5],
            color: palette.white,
            fontSize: "14px",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: palette.primary[4],
            },
            "&:active": {
              backgroundColor: palette.primary[7],
            },
            "&.Mui-disabled": {
              backgroundColor: palette.primary[0.5],
              color: palette.grey[1.5],
            },
          },
        },
      ],
    },
  },
});

export default theme;
