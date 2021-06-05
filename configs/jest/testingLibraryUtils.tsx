import React, { ComponentType, FC, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "style/theme";

type PropType = {
  children: ReactElement;
};

const Providers: FC<PropType> = ({ children }: PropType) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
): RenderResult =>
  render(ui, { wrapper: Providers as ComponentType, ...options });

export * from "@testing-library/react";

export { customRender as render };
