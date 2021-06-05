import {} from "styled-components";
import { Theme } from "style/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
