interface Primary {
  paleBlue: string;
  brightBlue: string;
}
interface Neutral {
  veryPaleBlue: string;
  desaturatedBlue: string;
  darkBlue: string;
  white: string;
}
interface Weights {
  medium: number;
  bold: number;
  black: number;
}
interface BodyCopy {
  fontSize: string;
}
interface Font {
  family: string;
  weights: Weights;
}
interface Breakpoints {
  mobile: string;
  desktop: string;
}
interface Color {
  primary: Primary;
  neutral: Neutral;
}
interface Typography {
  bodyCopy: BodyCopy;
  font: Font;
}
interface Theme {
  breakpoints: Breakpoints;
  color: Color;
  typography: Typography;
}

const theme: Theme = {
  breakpoints: {
    mobile: "375px",
    desktop: "1440px"
  },
  color: {
    primary: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)"
    },
    neutral: {
      white: "hsl(0deg 0% 100%)",
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)"
    }
  },
  typography: {
    bodyCopy: {
      fontSize: "16px"
    },
    font: {
      family: "'Red Hat Display', sans-serif",
      weights: {
        medium: 500,
        bold: 700,
        black: 900
      }
    }
  }
};

export default theme;
