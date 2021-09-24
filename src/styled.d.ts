// styled.d.ts
import "styled-components";
import themeLight from "../themes/themeLight";

type MyTheme = typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
