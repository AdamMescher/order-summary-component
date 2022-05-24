import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --breakpoint-mobile: ${theme.breakpoints.mobile};
    --breakpoint-desktop: ${theme.breakpoints.desktop};
    --paleBlue: ${theme.color.primary.paleBlue};
    --brightBlue: ${theme.color.primary.brightBlue};
    --veryPaleBlue: ${theme.color.neutral.veryPaleBlue};
    --desaturatedBlue: ${theme.color.neutral.desaturatedBlue};
    --darkBlue: ${theme.color.neutral.darkBlue};
    --white: ${theme.color.neutral.white};
    --fontFamily: ${theme.typography.font.family};
    --fs-body: ${theme.typography.bodyCopy.fontSize};
    --fw-regular: ${theme.typography.font.weights.medium};
    --fw-bold: ${theme.typography.font.weights.bold};
    --fw-black: ${theme.typography.font.weights.black};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fontFamily);
  }
  body {
    font-size: var(--fs-body);
    font-weight: var(--fw-regular);
  }
}`;

export default GlobalStyle;
