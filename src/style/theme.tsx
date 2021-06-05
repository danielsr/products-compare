export const theme = {
  colors: {
    primary: "#0050bc",
    grayLighter: "#eaeaea",
    grayLight: "#cccccc",
  },
} as const;

export type Theme = typeof theme;
