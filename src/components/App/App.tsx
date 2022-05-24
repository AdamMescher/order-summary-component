import styled from "styled-components";
import OrderSummary from "../OrderSummary";
import VisuallyHidden from "../VisuallyHidden";
import PatternBackgroundDesktop from "../../assets/pattern-background-desktop.svg";
import PatternBackgroundMobile from "../../assets/pattern-background-mobile.svg";

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;

  @media (max-width: var(--breakpoint-mobile)) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  & > img {
    display: block;
    line-height: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--veryPaleBlue);
  }
`;

const BackgroundMobile = styled(Background)`
  display: none;
  @media (max-width: var(--breakpoint-mobile)) {
    display: initial;
  }
`;
const BackgroundDesktop = styled(Background)`
  display: initial;
  @media (max-width: var(--breakpoint-mobile)) {
    display: none;
  }
`;

const App = () => {
  return (
    <Wrapper data-testid="app">
      <VisuallyHidden>
        <h1>Order Summary Component sandbox</h1>
        <h2>necessary for header order a11y error</h2>
      </VisuallyHidden>
      <OrderSummary />
      <BackgroundMobile>
        <img src={PatternBackgroundDesktop} alt="" />
      </BackgroundMobile>
      <BackgroundDesktop>
        <img src={PatternBackgroundMobile} alt="" />
      </BackgroundDesktop>
    </Wrapper>
  );
};

export default App;
